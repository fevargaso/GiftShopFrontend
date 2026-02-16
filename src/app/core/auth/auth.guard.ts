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

      const hasId = !!userState?.id && userState.id !== '';
      const isNotGuest = userState?.actualRole !== Role.UNAUTHORIZE;
      
      const isAutenticated = (hasId || !!persistedUser) && !!token && isNotGuest;

      if (isAutenticated) {
        return true;
      }
      
      console.warn('Access denied: Missing token or invalid user. Redirecting...');
      
      return router.createUrlTree(['/login'], { 
        queryParams: { returnUrl: state.url } 
      });
    })
  );
};

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  return store.select('user').pipe(
    take(1),
    map(userState => {
      const isAdmin = userState?.actualRole === Role.STAFF;

      if (isAdmin) {
        return true;
      }
      
      return router.createUrlTree(['/']);
    })
  );
};