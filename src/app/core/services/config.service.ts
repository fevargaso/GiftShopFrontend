import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { KeycloakOnLoad } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Keycloak variables
  KEYCLOAK_URL!: string;
  KEYCLOAK_REALM!: string;
  KEYCLOAK_CLIENT_ID!: string;
  KEYCLOAK_ON_LOAD!: KeycloakOnLoad;
  KEYCLOAK_SILENT_CHECK_SSO_REDIRECT_URI!: string;

  ELYSIUM_API_URL: string | undefined;
  JANUS_BAMBOO_API_URL: string | undefined;

  constructor(private httpClient: HttpClient) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.getConfigFile()).subscribe((data) => {
        Object.assign(this, data);
        resolve(data);
      });
    });
  }

  private getConfigFile(): string {
    return environment.configFile;
  }

}
