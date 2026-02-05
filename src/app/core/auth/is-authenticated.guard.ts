import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { KeycloakService } from "keycloak-angular";
import { Observable } from "rxjs";

export const isAuthenticated = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> => {
  const keycloakService = inject(KeycloakService);

  if (!keycloakService.getKeycloakInstance().authenticated) {
    keycloakService.login();
    return Promise.resolve(false);
  }

  return Promise.resolve(true);
};
