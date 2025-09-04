import { Component } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  constructor(private seo: SeoService) {
    this.seo.update('About', 'Learn about Amruth Royal Cuisine.');
  }
}
