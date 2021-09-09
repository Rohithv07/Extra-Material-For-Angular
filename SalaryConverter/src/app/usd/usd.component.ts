import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class UsdComponent implements OnInit {

  @Input() usdValue!: any;
  @Output() onUSDValueChage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRespectiveChange(event: any) {
    this.onUSDValueChage.emit(this.usdValue);
  }

}
