import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./test.component').then((m) => m.TestComponent),
  },
];
