import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { CTAComponent } from '../components/cta.component';
import { SeoService } from '../seo.service';

@Component({
  standalone: true,
  imports: [HeroComponent, CTAComponent],
  template: `
    <app-hero title="Amruth Royal Cuisine" subtitle="Authentic Indian flavors in Wixom" />
    <app-cta link="/menu" label="Explore Menu" />
  `,
})
export class HomeComponent {
  constructor(private seo: SeoService) {
    this.seo.update('Home', 'Authentic Indian restaurant in Wixom, Michigan');
  }
}
