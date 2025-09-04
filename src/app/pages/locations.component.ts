import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-locations',
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit {

  ngOnInit() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      const seo = inject(SeoService);
      seo.update({
        title: 'Locations – Amruth Royal Cuisine',
        description: 'Visit us in Wixom, MI.',
        url: 'https://amruth.example/locations'
      });
    }
  }
}
