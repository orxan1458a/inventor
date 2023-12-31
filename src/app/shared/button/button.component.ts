import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() imgSrc = '';
  @Input() labelContent = '';

}
