import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userService: UserServiceService) {}

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
}
