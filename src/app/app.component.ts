import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'inventor';

  constructor(
    public data_service:DataService
  ){}

  removeTab(index:number){
    this.data_service.tabs.splice(index,1);
  }
}
