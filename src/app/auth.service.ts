import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post(this.loginUrl, user);
  }

}
