import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  host: { class: 'bg-cream text-center py-20' }
})
export class HeroComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() ctaLabel?: string;
  @Input() ctaLink?: string;
}
