import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-metre',
  templateUrl: './metre.component.html',
  styleUrls: ['./metre.component.css']
})
export class MetreComponent implements OnInit {

  @Input() mValue: any;
  @Output() onMValueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onMetreChange(event: any) {
    this.onMValueChange.emit(this.mValue);
  }

}
