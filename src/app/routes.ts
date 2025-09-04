import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'faqs',
    loadComponent: () =>
      import('./pages/faqs.component').then((m) => m.FaqsComponent),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials.component').then((m) => m.TestimonialsComponent),
  },
  {
    path: 'legal',
    loadComponent: () =>
      import('./pages/legal.component').then((m) => m.LegalComponent),
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./pages/locations.component').then((m) => m.LocationsComponent),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./pages/post.component').then((m) => m.PostComponent),
  },
];
