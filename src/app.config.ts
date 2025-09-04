import { ApplicationConfig } from '@angular/core';
import {
  Meta,
  Title,
  provideClientHydration
} from '@angular/platform-browser';
import {
  provideNoopAnimations
} from '@angular/platform-browser/animations';
import {
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    provideNoopAnimations(),
    Meta,
    Title
  ]
};
