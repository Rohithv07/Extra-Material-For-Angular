import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-g',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.css']
})
export class GComponent implements OnInit {

  @Input() g!: any;
  @Output() onGValueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onGChange(event: any) {
    this.onGValueChange.emit(this.g);
  }

}
