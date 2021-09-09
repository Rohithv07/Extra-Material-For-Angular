import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-km',
  templateUrl: './km.component.html',
  styleUrls: ['./km.component.css']
})
export class KmComponent implements OnInit {

  @Input() kmValue!:any;
  @Output() onKMValueChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onKMChange(event: any) {
    this.onKMValueChange.emit(this.kmValue);
  }


}
