import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user) {
    return this.http.post(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['./events']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
