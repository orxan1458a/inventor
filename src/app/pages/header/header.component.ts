import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/core/services/subject/tab.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tab_service:TabService
  ) { }

  ngOnInit(): void {
  }

  menuItemClick(icon:string,tabName:any){
    this.tab_service.addTab.next({icon:icon,tabName:tabName})
  }
}
