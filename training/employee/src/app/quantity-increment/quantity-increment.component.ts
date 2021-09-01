import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {

  isButtonIsClicked: boolean = false;
  counterValue: number = 0;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.isButtonIsClicked = !this.isButtonIsClicked;
  }

  onIncrement() {
    this.counterValue += 1;
  }

  onIncrementQuantitySelector() {
    this.counter += 1;
  }

  onDecrementQuantitySelector() {
    this.counter -= 1;
  }

}
