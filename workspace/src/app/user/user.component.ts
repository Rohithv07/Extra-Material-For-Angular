import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../user-interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: UserInterface[] = [];

  showConfig() {
    this.userService.getAllUsers()
    .subscribe(jsonData => {
      jsonData['data'].forEach((data: { id: number; firstName: string; lastName: string; email: string; avatar: string; }) => {
        this.user.push(data.id, data.firstName, data.lastName, data.email, data.avatar);
      });
      console.log(this.user);
    }
    )
  }


  ngOnInit(): void {
    this.showConfig();
  }

}
