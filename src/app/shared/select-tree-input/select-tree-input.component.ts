import { Component, ViewEncapsulation } from '@angular/core';
interface TreeData {
  name: string
  value: string
  children: TreeData[]
}
@Component({
  selector: 'app-select-tree-input',
  templateUrl: './select-tree-input.component.html',
  styleUrls: ['./select-tree-input.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SelectTreeInputComponent {
  form:any
options: TreeData[] = [
    {
      name: 'Electronics',
      value: 'Electronics',
      children: [
        {
          name: 'Phones',
          value: 'Phones',
          children: [
            {
              name: 'Iphones',
              value: 'Iphones', 
              children: []
              
            } 
          ]
        }
      ]
    },
   
    {
      name: 'Web Development',
      value: 'Web Development',
      children: [
        {
          name: 'Frontend Development',
          value: 'Frontend Development',
          children: [
            {
              name: 'Angular',
              value: 'Angular',
              children: []

              
            },
            {
              name: 'React',
              value: 'React',
              children: []

              
            }
          ]
        }
      ]
    },
  ]
}
