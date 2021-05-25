import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      this.router.navigate(['edit-emp-reactive']);
    }

  }

}
