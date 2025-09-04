import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      const seo = inject(SeoService);
      seo.update({
        title: 'About Amruth Royal Cuisine',
        description: 'Our story and passion for authentic Indian cuisine.',
        url: 'https://amruth.example/about'
      });
    }
  }
}
