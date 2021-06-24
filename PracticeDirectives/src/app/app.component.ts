import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details : string = "Hello welcome to ooty, nice to meet you";
  counter : number = 0;
  isDetailShow = false;
  logArray = []

  onShowDetail() {
    this.isDetailShow = !this.isDetailShow;
    this.counter += 1;
    // this.logArray.push(this.counter);
    this.logArray.push(new Date()); // timestamp
  }

}
