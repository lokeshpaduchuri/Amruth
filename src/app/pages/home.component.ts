import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/seo.service';
import { SanityService, MenuItem } from '../shared/sanity.service';
import { HeroComponent } from '../components/hero.component';
import { MenuCardComponent } from '../components/menu-card.component';
import { CtaComponent } from '../components/cta.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [HeroComponent, MenuCardComponent, CtaComponent]
})
export class HomeComponent implements OnInit {
  private sanity = inject(SanityService);

  featured: MenuItem[] = [];
  testimonials = this.sanity.fetchTestimonials();

  async ngOnInit() {
    this.featured = await this.sanity.fetchFeaturedMenu();
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      const seo = inject(SeoService);
      seo.update({
        title: 'Amruth Royal Cuisine – Authentic Indian Food in Wixom, MI',
        description: 'Savor royal Indian flavors. Dine-in, takeout, catering.',
        url: 'https://amruth.example/'
      });
    }
  }
}
