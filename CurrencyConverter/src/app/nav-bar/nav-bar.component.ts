import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  isAuthenticated = false;

  private userSub!: Subscription;

  constructor(private authService : AuthService) { }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(u => {
      // this.isAuthenticated = !u ? false : true;
      // console.log(this.isAuthenticated);
      this.isAuthenticated = !!u;
      console.log(this.isAuthenticated);
    });
  }

  
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
