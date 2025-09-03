import { Component, OnInit, inject } from '@angular/core';
import faqs from '../../../data/faqs.json';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-faqs',
  templateUrl: './faqs.component.html'
})
export class FaqsComponent implements OnInit {
  items = faqs;
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'FAQs – Amruth Royal Cuisine',
      description: 'Frequently asked questions about our restaurant.',
      url: 'https://amruth.example/faqs'
    });
  }
}
