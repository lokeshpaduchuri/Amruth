import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeroComponent } from './components/hero.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, RouterLink, HeroComponent]
})
export class AppComponent {
  currentYear = new Date().getFullYear();
}
