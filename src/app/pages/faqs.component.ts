import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import faqs from '../../../data/faqs.json';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-faqs',
  templateUrl: './faqs.component.html'
})
export class FaqsComponent implements OnInit {
  items = faqs;

  ngOnInit() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      const seo = inject(SeoService);
      seo.update({
        title: 'FAQs – Amruth Royal Cuisine',
        description: 'Frequently asked questions about our restaurant.',
        url: 'https://amruth.example/faqs'
      });
    }
  }
}
