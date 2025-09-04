import { Component } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  standalone: true,
  templateUrl: './locations.component.html',
})
export class LocationsComponent {
  constructor(private seo: SeoService) {
    this.seo.update('Locations', 'Find Amruth Royal Cuisine in Wixom');
  }
}
