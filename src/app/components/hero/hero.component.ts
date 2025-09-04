import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
