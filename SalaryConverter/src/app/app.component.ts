import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SalaryConverter';
  yenValue!:number;
  usdValue!:number;
  cmValue!:number;
  kmValue!: number;
  mValue!: number;
  kg!: number;
  g!: number;

  onUSDValueChage(value: any) {
      this.yenValue = value / 0.0090;
  }

  onYenValueChange(value: any) {
      this.usdValue = value * 110;
  }

  onCMValueChange(value: any) {
    this.mValue = value / 100;
    this.kmValue = value / 100000;
  }

  onMValueChange(value: any) {
    this.cmValue = value * 100;
    this.kmValue = value / 1000;
  }

  onKMValueChange(value: any) {
    this.cmValue = value * 100000;
    this.mValue = value * 1000;
  }

  onKgValueChange(value: any) {
    this.g = value * 1000;
  }

  onGValueChange(value: any) {
    this.kg = value / 1000;
  }
}
