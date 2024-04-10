import { Component, Input, ViewEncapsulation } from '@angular/core';
interface Item {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class SelectInputComponent {

  @Input() itemList:Item[]=[]

  
  // selectedFood = this.itemList[2].value;
selectedFood=null
}
