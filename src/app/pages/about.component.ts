import { Component } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  standalone: true,
  template: `
    <h2 class="text-2xl font-bold mb-4">About Us</h2>
    <p>Amruth Royal Cuisine brings authentic Indian dishes to Wixom, Michigan.</p>
  `,
})
export class AboutComponent {
  constructor(private seo: SeoService) {
    this.seo.update('About', 'Learn about Amruth Royal Cuisine.');
  }
}
