import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-locations',
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'Locations – Amruth Royal Cuisine',
      description: 'Visit us in Wixom, MI.',
      url: 'https://amruth.example/locations'
    });
  }
}
