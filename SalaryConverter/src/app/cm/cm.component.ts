import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cm',
  templateUrl: './cm.component.html',
  styleUrls: ['./cm.component.css']
})
export class CmComponent implements OnInit {
  @Input() cmValue!: any;
  @Output() onCMValueChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onCMChange(event: any) {
    this.onCMValueChange.emit(this.cmValue);
  }

}
