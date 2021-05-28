import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserInterface } from '../user-interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService) { }

  user: UserInterface[] = [];

  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscription4!: Subscription;

  newUser: UserInterface = {
    id: 1,
    first_name: 'Something',
    last_name: 'Again',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RandomBitmap.png',
    email: 'abc@gmail.com'
  }

  alterUser: UserInterface = {
    id: 1,
    first_name: 'Something',
    last_name: 'Again',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Tour_da_Ta%C3%A7a_da_Copa_do_Mundo_%2814231974005%29.jpg/1200px-Tour_da_Ta%C3%A7a_da_Copa_do_Mundo_%2814231974005%29.jpg',
    email: 'abc@gmail.com'
  }

  removeId = 1;

  // showConfig() {
  //   this.subscription1 = this.userService.getAllUsers().subscribe((data) => {
  //     this.user = data.data;
  //     console.log(data.data[0].id);
  //     console.log(this.user[0].id);
  //   });
  // }

  showConfig() {
    this.subscription1 = this.userService.getAllUsers().subscribe(data => {
      console.log(data['data']);
      data['data'].forEach(value => {
        this.user.push(value);
      });
    });
    console.log(this.user);
  }

  addUser() {
    this.subscription2 = this.userService.createUser(this.newUser)
    .subscribe((u) => {
      this.user.push(u);
    })
    console.log(this.user);
  }

  updateUser() {
    this.subscription3 = this.userService.updateUser(this.alterUser)
    .subscribe((u) => {
      this.user.forEach(value => {
        if (value.id == 1) {
          value.avatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Tour_da_Ta%C3%A7a_da_Copa_do_Mundo_%2814231974005%29.jpg/1200px-Tour_da_Ta%C3%A7a_da_Copa_do_Mundo_%2814231974005%29.jpg';
        }
      })
    })
  }

  deleteUser() {
    this.subscription4 = this.userService.removeUser(this.removeId)
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

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }



}
