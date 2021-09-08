import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {this.counter++}, 1000)
  }

  counter: any = 0;

  @Output()
  buttonClick = new EventEmitter();

  buttonClicked() {
    this.buttonClick.emit(this.counter);
  }

}
