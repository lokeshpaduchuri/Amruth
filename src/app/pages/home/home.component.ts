import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CTAComponent } from '../../components/cta/cta.component';
import { SeoService } from '../../seo.service';

@Component({
  standalone: true,
  imports: [HeroComponent, CTAComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private seo: SeoService) {
    this.seo.update('Home', 'Authentic Indian restaurant in Wixom, Michigan');
  }
}
