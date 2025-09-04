import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  imports: [CommonModule]
})
export class LocationsComponent implements OnInit {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      const seo = inject(SeoService);
      seo.update({
        title: 'Locations – Amruth Royal Cuisine',
        description: 'Visit us in Wixom, MI.',
        url: 'https://amruth.example/locations'
      });
    }
  }
}
