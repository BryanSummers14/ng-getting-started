import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl = environment.usersUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.usersUrl);
  }
}
