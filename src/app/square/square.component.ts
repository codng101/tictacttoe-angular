import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  
   <button style="height: 100%; width: 100%; font-size: 100px;" nbButton hero *ngIf="!value"> {{value}} </button>
   <button style="height: 100%; width: 100%; font-size: 100px;" nbButton hero status="success" *ngIf="value == 'X'"> {{value}} </button>
   <button style="height: 100%; width: 100%; font-size: 100px;" nbButton hero status="info" *ngIf="value == 'O'"> {{value}} </button>
  `,
  styles: [
  ]
})
export class SquareComponent  {
 
  @Input()
  value!: 'X' | 'O';
}
