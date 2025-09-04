import { Component, Input } from '@angular/core';
import { MenuItem } from '../../sanity/schemas';

@Component({
  standalone: true,
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
})
export class MenuCardComponent {
  @Input() item!: MenuItem;
}
