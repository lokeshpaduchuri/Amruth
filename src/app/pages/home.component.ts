import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';
import { SanityService, MenuItem } from '../shared/sanity.service';
import { HeroComponent } from '../components/hero.component';
import { MenuCardComponent } from '../components/menu-card.component';
import { CtaComponent } from '../components/cta.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, HeroComponent, MenuCardComponent, CtaComponent]
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);
  private sanity = inject(SanityService);

  featured: MenuItem[] = [];
  testimonials = this.sanity.fetchTestimonials();

  async ngOnInit() {
    this.featured = await this.sanity.fetchFeaturedMenu();
    this.seo.update({
      title: 'Amruth Royal Cuisine – Authentic Indian Food in Wixom, MI',
      description: 'Savor royal Indian flavors. Dine-in, takeout, catering.',
      url: 'https://amruth.example/'
    });
  }
}
