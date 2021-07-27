import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username = 'admin';
  password = 'password';
  error = 'Username / Password';

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if (!form.valid)
      return;
    const formUsername = form.value.username;
    const formPassword = form.value.password;
    if (formUsername === this.username && formPassword === this.password) {
      this.authService.login();
      this.router.navigate(['currency']);
    }

  }

}
