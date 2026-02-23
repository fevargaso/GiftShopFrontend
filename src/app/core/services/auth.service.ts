import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addUser, clearUser } from '../auth/user.store';
import { tap, EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly store = inject(Store);

  private readonly BASE_URL = 'https://localhost:5201/api/user';

  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'loggedUser';

  register(userData: unknown) {
    return this.http.post(`${this.BASE_URL}/register`, userData);
  }

  login(credentials: { email: string; password: string }) {
    if (!credentials?.email || !credentials?.password) {
      return EMPTY;
    }

    return this.http.post<any>(`${this.BASE_URL}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem(this.TOKEN_KEY, response.token);
        const user = response.user;
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          roles: [user.role],
          initials: user.name?.substring(0, 2).toUpperCase() || 'U',
        };

        localStorage.setItem(this.USER_KEY, JSON.stringify(userData));

        window.location.href = '/';

        this.store.dispatch(
          addUser({
            id: user.id,
            email: user.email,
            firstName: user.name,
            lastName: '',
            roles: [user.role],
          }),
        );
      }),
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.clear();

    this.store.dispatch(clearUser());
  }
}
