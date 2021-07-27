import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginOrLogout: string = '';
  helperFunctionSignInSignOut() : string {
    if (this.authService.isLoggedIn()) {
      this.loginOrLogout = 'Logout';
    }
    else {
      this.loginOrLogout = 'Login'
    }
    //this.router.navigate(['login'])
    return this.loginOrLogout;
  }

  // clickSignInSignOut() {
  //   this.router.navigate(['login'])
  //   if (this.authService.isLoggedIn()) {
  //     this.loginOrLogout = 'Login';
  //   }
  //   else {
  //     this.loginOrLogout = 'Logout'
  //   }
  // }

}
