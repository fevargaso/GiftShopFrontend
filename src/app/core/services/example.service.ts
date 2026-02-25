import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExampleModel } from '../models/example.model';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private readonly configService = inject(ConfigService);
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${this.configService.ELYSIUM_API_URL}/api/examples`;

  constructor() {}

  getExamples(term: string = '') {
    let queryParams = new HttpParams();
    if (term != '') {
      queryParams.append('term', term);
    }

    return this.http.get<ExampleModel[]>(`${this.baseUrl}`, { params: queryParams });
  }
}
