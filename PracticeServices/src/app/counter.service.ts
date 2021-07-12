import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inActiveToActiveCounter = 0;

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log("Active to Inactive Count:" + this.activeToInactiveCounter);
  }

  incrementInActiveToActiveCounter() {
    this.inActiveToActiveCounter++;
    console.log("Inactive to Active Count:" + this.inActiveToActiveCounter);
  }
  constructor() { }
}
