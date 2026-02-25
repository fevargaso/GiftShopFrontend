import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const isAuthenticated = () => {
  const router = inject(Router);

  const isLoggedIn = !!localStorage.getItem('loggedUser');

  if (isLoggedIn) {
    return true;
  }

  return router.parseUrl('/login');
};
