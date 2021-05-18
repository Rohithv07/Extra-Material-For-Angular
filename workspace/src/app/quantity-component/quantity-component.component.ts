import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-component',
  templateUrl: './quantity-component.component.html',
  styleUrls: ['./quantity-component.component.css']
})
export class QuantityComponentComponent implements OnInit {

  @Input() counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onDecrement() {
    this.counter -= 1;
    return this.counter;
  }

  onIncrement() {
    this.counter += 1;
    return this.counter;
  }


}
