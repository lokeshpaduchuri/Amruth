import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SITE } from '../site.config';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  site = SITE;
  year = new Date().getFullYear();
  dark = false;

  constructor() {
    // Initialize theme from localStorage or system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.dark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', this.dark);

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
    document.documentElement.classList.toggle('dark', this.dark);
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');
  }
}
