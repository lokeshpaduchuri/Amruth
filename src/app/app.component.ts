import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>Angular 18 Standalone App</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/test" routerLinkActive="active">Test</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
