import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-button',
  templateUrl: './mini-button.component.html',
  styleUrls: ['./mini-button.component.scss']
})
export class MiniButtonComponent {
  @Input() imgSrc = '';
}
