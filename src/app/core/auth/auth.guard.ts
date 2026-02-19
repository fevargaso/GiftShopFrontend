import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { Role } from './roles';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const store = inject(Store);

  return store.select('user').pipe(
    take(1),
    map(userState => {
      const persistedUser = localStorage.getItem('loggedUser');
      const token = localStorage.getItem('token');

      const hasId = !!userState?.id;
      const isNotGuest = userState?.actualRole !== Role.UNAUTHORIZE;

      const isAuthenticated =
        (hasId || !!persistedUser) && !!token && isNotGuest;

      return isAuthenticated
        ? true
        : router.createUrlTree(['/login'], {
            queryParams: { returnUrl: state.url }
          });
    })
  );
};

export const adminGuard: CanActivateFn = () => {

  const router = inject(Router);
  const store = inject(Store);

  return store.select('user').pipe(
    take(1),
    map(userState => {
      const isAdmin = userState?.actualRole === Role.STAFF;

      return isAdmin
        ? true
        : router.createUrlTree(['/']);
    })
  );
};
