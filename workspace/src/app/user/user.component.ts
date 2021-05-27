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

  newUser: UserInterface = {
    id: 1,
    firstName: 'Something',
    lastName: 'Again',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RandomBitmap.png',
    email: 'abc@gmail.com'
  }

  alterUser: UserInterface = {
    id: 1,
    firstName: 'Something',
    lastName: 'Again',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Tour_da_Ta%C3%A7a_da_Copa_do_Mundo_%2814231974005%29.jpg/1200px-Tour_da_Ta%C3%A7a_da_Copa_do_Mundo_%2814231974005%29.jpg',
    email: 'abc@gmail.com'
  }

  removeId = 1;

  showConfig() {
    this.userService.getAllUsers().subscribe((data) => {
    console.log(data["data"]);
      data["data"].forEach((value) => {
        this.user.push(value);
      }
      )
    });
    console.log(this.user);
  }

  addUser() {
    this.userService.createUser(this.newUser)
    .subscribe((u) => {
      this.user.push(u);
    })
    console.log(this.user);
  }

  updateUser() {
    this.userService.updateUser(this.alterUser)
    .subscribe((u) => {
      this.user.forEach(value => {
        if (value.id == 1) {
          value.avatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Tour_da_Ta%C3%A7a_da_Copa_do_Mundo_%2814231974005%29.jpg/1200px-Tour_da_Ta%C3%A7a_da_Copa_do_Mundo_%2814231974005%29.jpg';
        }
      })
    })
  }

  deleteUser() {
    this.userService.removeUser(this.removeId)
    .subscribe((u) => {
      this.user.forEach(value => {
        if (value.id == this.removeId) {
          this.user.splice(6);
        }
      })
    });
    console.log(this.user);
  }



  ngOnInit(): void {
    this.showConfig();
  }



}
