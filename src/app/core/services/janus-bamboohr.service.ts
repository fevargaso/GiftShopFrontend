import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { timeout } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class JanusBambooHrService {
  private readonly http = inject(HttpClient);
  private readonly configService = inject(ConfigService);
  private readonly baseUrl = this.configService.JANUS_BAMBOO_API_URL;
  private readonly janusBambooHrApiNotification: string = 'v3/notifications';

  constructor() {}

  sendNotification(appReporterNotification: FormData) {
    const headers = new HttpHeaders({ enctype: 'multipart/form-data' });
    return this.http
      .post(`${this.baseUrl}${this.janusBambooHrApiNotification}`, appReporterNotification, { headers })
      .pipe(timeout(30_000));
  }
}
