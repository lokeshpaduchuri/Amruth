import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero',
  template: `
    <section class="text-center py-16 bg-cream">
      <h1 class="text-4xl font-bold text-royalred mb-4">{{title}}</h1>
      <p class="text-lg text-deepmaroon">{{subtitle}}</p>
    </section>
  `,
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
