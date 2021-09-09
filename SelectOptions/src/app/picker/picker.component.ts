import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {

  @Input() colorOptions!: string[];
  @Input() initialColor!: string;
  selectedColor!: string;

  ngOnInit(): void {
    this.selectedColor = this.initialColor;
  }


 seleccionarColor(color: string){
   this.selectedColor = color;
 }
 
}
