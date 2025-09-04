// main.server.ts
import { enableProdMode, PLATFORM_ID } from '@angular/core';
// import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app.config';

// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers!,
    { provide: PLATFORM_ID, useValue: 'server' }, // 💥 Fix hydration
  ],
});
