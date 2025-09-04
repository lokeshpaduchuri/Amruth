import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-cta',
  imports: [RouterLink],
  template: `
    <div class="text-center py-8">
      <a [routerLink]="link" class="px-6 py-3 bg-teal text-cream rounded shadow">{{label}}</a>
    </div>
  `,
})
export class CTAComponent {
  @Input() link = '';
  @Input() label = '';
}
