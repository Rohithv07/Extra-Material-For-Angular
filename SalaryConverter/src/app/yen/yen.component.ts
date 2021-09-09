import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html',
  styleUrls: ['./yen.component.css']
})
export class YenComponent implements OnInit {

  @Input() yenValue!: any;
  @Output() onYenValueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRespectiveValueChange(event: any) {
    this.onYenValueChange.emit(this.yenValue);
  }

}
