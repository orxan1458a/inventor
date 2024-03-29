import { Component, OnInit } from '@angular/core';
import { PartDBService } from 'src/app/core/services/database/part.service';
import { PartSubjectService } from 'src/app/core/services/subject/part-subject.service';

@Component({
  selector: 'app-part-manager',
  templateUrl: './part-manager.component.html',
  styleUrls: ['./part-manager.component.scss']
})
export class PartManagerComponent implements OnInit {

  constructor(
    private part_subject:PartSubjectService,
    private part_db_service:PartDBService
  ) { }

  ngOnInit(): void {
    console.log("part manager opened")
   this.part_subject.getPart.subscribe((partId)=>{
    console.log(partId)
   })
  }

}
