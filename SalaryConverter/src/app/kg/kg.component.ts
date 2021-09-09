import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kg',
  templateUrl: './kg.component.html',
  styleUrls: ['./kg.component.css']
})
export class KgComponent implements OnInit {

  @Input() kg!:any;
  @Output() onKgValueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onKgChange(event: any) {
    this.onKgValueChange.emit(this.kg);
  }

}
