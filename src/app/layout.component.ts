import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SITE } from '../site.config';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="p-4 bg-royalred text-cream flex justify-between">
      <a routerLink="/" class="font-bold">{{site.name}}</a>
      <nav class="space-x-4">
        <a routerLink="/about">About</a>
        <a routerLink="/menu">Menu</a>
        <a routerLink="/blog">Blog</a>
        <a routerLink="/contact">Contact</a>
      </nav>
      <button (click)="toggle()" class="ml-4">{{dark?'Light':'Dark'}}</button>
    </header>
    <main class="p-4"><router-outlet></router-outlet></main>
    <footer class="p-4 text-center bg-deepmaroon text-cream">© {{year}} {{site.name}}</footer>
  `,
})
export class LayoutComponent {
  site = SITE;
  year = new Date().getFullYear();
  dark = false;

  constructor() {
    if (SITE.ga4) {
      const s = document.createElement('script');
      s.src = `https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}`;
      s.async = true;
      document.head.appendChild(s);
      const inline = document.createElement('script');
      inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${SITE.ga4}');`;
      document.head.appendChild(inline);
    }
  }

  toggle() {
    this.dark = !this.dark;
    document.body.classList.toggle('dark', this.dark);
  }
}
