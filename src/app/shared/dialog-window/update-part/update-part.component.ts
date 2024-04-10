import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
interface Item {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-part',
  templateUrl: './update-part.component.html',
  styleUrls: ['./update-part.component.scss']
})
export class UpdatePartComponent {
  foods: Item[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(public dialogRef:MatDialogRef<UpdatePartComponent>){}

  close(){
    this.dialogRef.close();
  }
}
