import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private readonly url = 'https://localhost:5201/api/user';

  getAllUsers(paramsData?: any): Observable<any> {
    let params = new HttpParams();

    if (paramsData) {
      Object.keys(paramsData).forEach(key => {
        const value = paramsData[key];
        if (value !== null && value !== undefined && value !== '') {
          params = params.set(key, value.toString());
        }
      });
    }

    return this.http.get<any>(this.url, { params });
  }

updateUser(user: any): Observable<any> {
  return this.http.put(`${this.url}/${user.Id}`, user);
}

deleteUser(id: string): Observable<any> {
  return this.http.delete(`${this.url}/${id}`);
}

registerUser(user: any): Observable<any> {
  return this.http.post(`${this.url}/register`, user);
}
}