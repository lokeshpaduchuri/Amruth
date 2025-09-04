import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { SeoService } from '../seo.service';
import { faqJsonLd } from '../seo';

interface FAQ { question: string; answer: string }

@Component({
  standalone: true,
  imports: [HttpClientModule, NgFor],
  template: `
    <h2 class="text-2xl font-bold mb-4">FAQs</h2>
    <div *ngFor="let f of faqs" class="mb-4">
      <h3 class="font-semibold">{{f.question}}</h3>
      <p>{{f.answer}}</p>
    </div>
    <script type="application/ld+json" [textContent]="jsonLd"></script>
  `,
})
export class FaqsComponent implements OnInit {
  faqs: FAQ[] = [];
  jsonLd = '';
  private http = inject(HttpClient);
  private seo = inject(SeoService);

  async ngOnInit() {
    this.seo.update('FAQs', 'Frequently asked questions');
    this.faqs = await firstValueFrom(this.http.get<FAQ[]>('/data/faqs.json'));
    this.jsonLd = JSON.stringify(faqJsonLd(this.faqs));
  }
}
