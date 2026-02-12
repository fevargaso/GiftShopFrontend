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
      // 1. Obtenemos el usuario de la persistencia como respaldo
      const persistedUser = localStorage.getItem('loggedUser');
      
      // 2. Determinamos si es un usuario válido:
      // Debe tener un ID en el store O existir en localStorage
      // Y su rol NO debe ser UNAUTHORIZE
      const hasId = !!userState?.id && userState.id !== '';
      const isNotGuest = userState?.actualRole !== Role.UNAUTHORIZE;
      
      const isAutenticated = (hasId || !!persistedUser) && isNotGuest;

      if (isAutenticated) {
        return true;
      }

      // 3. Si llega aquí, es un Unregistered intentando entrar a una zona protegida.
      // Lo mandamos al login capturando la URL para el redireccionamiento posterior.
      console.warn('Acceso denegado: Redirigiendo a login desde:', state.url);
      
      return router.createUrlTree(['/login'], { 
        queryParams: { returnUrl: state.url } 
      });
    })
  );
};