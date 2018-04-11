import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: '',
    password: ''
  };

  private showError: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.showError = false;
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res['token']);
        this.showError = false;
        this.router.navigate(['/special']);
      },
      err => {
        console.log(err);
        this.showError = true;
      });
    }
}
