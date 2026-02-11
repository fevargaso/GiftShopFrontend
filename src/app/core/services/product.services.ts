import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product-model';
import { PagedResult } from '../models/paged-result.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

getProducts(params: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params.search) httpParams = httpParams.set('search', params.search);
    if (params.category) httpParams = httpParams.set('categoryId', params.category);
    httpParams = httpParams.set('page', params.page.toString());
    httpParams = httpParams.set('pageSize', params.pageSize.toString());

    return this.http.get<any>(this.apiUrl, { params: httpParams });
  }

  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Partial<Product>): Observable<string> {
    return this.http.post<string>(this.apiUrl, product);
  }

  update(id: string, product: Partial<Product>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}