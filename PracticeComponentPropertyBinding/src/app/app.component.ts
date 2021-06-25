import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumberArray: number [] = []
  evenNumberArray: number [] = []
  onIntervalCounterStart(firedCounter : number) {
    //console.log(firedCounter);
    if (firedCounter % 2 === 0) {
      this.evenNumberArray.push(firedCounter);
    }
    else {
      this.oddNumberArray.push(firedCounter);
    }
  }
}
