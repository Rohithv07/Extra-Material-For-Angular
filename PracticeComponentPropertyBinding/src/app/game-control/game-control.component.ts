import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalCounter = new EventEmitter<number>();
  interval;
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartingGame() {
    this.interval = setInterval(() => {
      this.intervalCounter.emit(this.counter + 1);
      this.counter += 1;
    }, 1000)
  }

  onEndingGame() {
    clearInterval(this.interval);
  }

}
