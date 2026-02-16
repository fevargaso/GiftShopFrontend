import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addUser } from '../auth/user.store';
import { tap, EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private store = inject(Store);
  private readonly url = 'https://localhost:5201/api/user';

  register(userData: any) {
    return this.http.post<any>(`${this.url}/register`, userData);
  }

login(credentials: any) {
  if (!credentials || !credentials.email || !credentials.password) {
    return EMPTY;
  }

  return this.http.post<any>(`${this.url}/login`, credentials).pipe(
    tap(response => {
      localStorage.setItem('token', response.token);

      const user = response.user;
      
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        roles: [user.role], 
        initials: user.name.substring(0, 2).toUpperCase()
      };

      localStorage.setItem('loggedUser', JSON.stringify(userData));

      this.store.dispatch(addUser({
        id: user.id,
        email: user.email,
        firstName: user.name,
        lastName: '',
        roles: [user.role]
      }));
    })
  );
}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedUser');
  }
}