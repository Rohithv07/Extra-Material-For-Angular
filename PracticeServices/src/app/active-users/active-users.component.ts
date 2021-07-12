import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userService:UserServiceService){}
  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
}
