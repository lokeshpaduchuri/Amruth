import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  imports: [CommonModule, RouterLink],
  host: { class: 'bg-cream text-center py-20' }
})
export class HeroComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() ctaLabel?: string;
  @Input() ctaLink?: string;
}
