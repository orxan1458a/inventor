import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './core/services/data.service';
import { TabService } from './core/services/subject/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'inventor';
  selected_index = 0;
  isActiveTag: string = "part_manager";

  constructor(
    public data_service: DataService,
    private tab_service: TabService
  ) { }
  ngOnInit(): void {
    this.tab_service.addTab.subscribe((res: { icon: string, tabName: string }) => {
      this.isActiveTag = res.tabName;
      const index = this.data_service.tabs.findIndex(d => d.tabName == res.tabName);
      if (index == -1) {
        this.data_service.tabs.push({ icon: res.icon, tabName: res.tabName });
      }
      this.selected_index = this.data_service.tabs.findIndex(d=>d.tabName==res.tabName);
    })
  }

  getActiveTab($event: number) {
    this.isActiveTag = this.data_service.tabs[$event].tabName;
    this.selected_index=$event;
  }

  removeTab(index: number) {
    this.data_service.tabs.splice(index, 1);
  }

}
