import { Component, Input } from '@angular/core';
import { MenuItem } from '../sanity/schemas';

@Component({
  standalone: true,
  selector: 'app-menu-card',
  template: `
    <div class="border p-4 rounded bg-white shadow">
      <h3 class="font-semibold">{{item.name}} - \${{item.price}}</h3>
      <p class="text-sm text-gray-600">{{item.description}}</p>
    </div>
  `,
})
export class MenuCardComponent {
  @Input() item!: MenuItem;
}
