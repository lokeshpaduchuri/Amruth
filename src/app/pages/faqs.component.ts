import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import faqs from '../../data/faqs.json';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  imports: [CommonModule]
})
export class FaqsComponent implements OnInit {
  items = faqs;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const seo = inject(SeoService);
      seo.update({
        title: 'FAQs – Amruth Royal Cuisine',
        description: 'Frequently asked questions about our restaurant.',
        url: 'https://amruth.example/faqs'
      });
    }
  }
}
