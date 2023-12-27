import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-information',
  templateUrl: './part-information.component.html',
  styleUrls: ['./part-information.component.scss']
})
export class PartInformationComponent implements OnInit {
  isHidden=false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  resize(){
    this.isHidden=!this.isHidden;
  }
}
