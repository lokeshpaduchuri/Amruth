import { Component } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  standalone: true,
  template: `
    <h2 class="text-2xl font-bold mb-4">Locations</h2>
    <p>48916 Pontiac Trail, Wixom, MI 48393</p>
  `,
})
export class LocationsComponent {
  constructor(private seo: SeoService) {
    this.seo.update('Locations', 'Find Amruth Royal Cuisine in Wixom');
  }
}
