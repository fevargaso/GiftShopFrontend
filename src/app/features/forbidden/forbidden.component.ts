import { Component, inject } from "@angular/core";

import { KeycloakService } from "keycloak-angular";
import { SharedModule } from "@shared/shared.module";

@Component({
  standalone: true,
  selector: 'app-forbidden',
  template: `
  <nz-result nzStatus="403" [nzTitle]="'Forbidden.TITLE' | translate" [nzSubTitle]="'Forbidden.SUBTITLE' | translate">
    <div nz-result-extra>
      <button nz-button nzType="primary" (click)="logout()">{{'Forbidden.BTN_BACK' | translate}}</button>
    </div>
  </nz-result>
  `,
  imports: [SharedModule]
})
export class ForbiddenComponent {
  protected readonly keycloak = inject(KeycloakService);

  protected readonly logout = () => {
    this.keycloak.logout(location.origin);
  };
}
