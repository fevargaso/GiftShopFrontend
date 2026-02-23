import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserQueryParams } from '../models/user.model';
import { PagedResult } from '../models/paged-result.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/user`;

  getAllUsers(paramsData?: UserQueryParams): Observable<PagedResult<User>> {
    let params = new HttpParams();

    if (paramsData) {
      Object.entries(paramsData).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params = params.set(key, value.toString());
        }
      });
    }

    return this.http.get<PagedResult<User>>(this.url, { params });
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>(`${this.url}/${user.id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  registerUser(user: Partial<User>): Observable<void> {
    return this.http.post<void>(`${this.url}/register`, user);
  }
}
