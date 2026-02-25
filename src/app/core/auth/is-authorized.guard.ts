import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { RoleService } from './role.service';

export const isAuthorized = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  const router = inject(Router);
  const roleService = inject(RoleService);

  const routeRoles: string[] | undefined = route.data['roles'];
  if (!routeRoles) {
    return Promise.resolve(true);
  }

  const currentRole = roleService.currentUserRole;
  const granted = routeRoles.some((role: string) => role.includes(currentRole));
  if (!granted) {
    return router.createUrlTree(['/forbidden']);
  }

  return Promise.resolve(true);
};
