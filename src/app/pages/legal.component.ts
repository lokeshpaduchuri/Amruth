import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import privacy from '../../../data/legal/privacy.md?raw';
import tos from '../../../data/legal/tos.md?raw';

@Component({
  standalone: true,
  selector: 'app-legal',
  templateUrl: './legal.component.html'
})
export class LegalComponent implements OnInit {
  sections = [
    { title: 'Privacy Policy', content: privacy },
    { title: 'Terms of Service', content: tos }
  ];
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'Legal – Amruth Royal Cuisine',
      description: 'Our privacy policy and terms of service.',
      url: 'https://amruth.example/legal'
    });
  }
}
