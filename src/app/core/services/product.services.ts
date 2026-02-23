import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product-model';
import { environment } from 'src/environments/environment';
import { ProductQueryParams } from '../models/product-query-params.model';
import { PagedProductResponse } from '../models/paged-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/products`;

  getProducts(params: ProductQueryParams): Observable<PagedProductResponse> {
    let httpParams = new HttpParams().set('page', params.page.toString()).set('pageSize', params.pageSize.toString());

    if (params.search) {
      httpParams = httpParams.set('search', params.search);
    }

    if (params.category) {
      httpParams = httpParams.set('categoryId', params.category);
    }

    return this.http.get<PagedProductResponse>(this.apiUrl, {
      params: httpParams,
    });
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: string): Observable<Product> {
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
