import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(environment.loginUrl, { username, password})
      .pipe(tap(res => {
        const token = jwt_decode(res.token);
        sessionStorage.setItem('axis-token', JSON.stringify(token));
      }));
  }
}
