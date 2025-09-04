import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SanityService, MenuItem } from '../shared/sanity.service';
import { SeoService } from '../shared/seo.service';
import { MenuCardComponent } from '../components/menu-card.component';

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [MenuCardComponent]
})
export class MenuComponent implements OnInit {
  private sanity = inject(SanityService);

  categories: { title: string; items: MenuItem[] }[] = [];

  async ngOnInit() {
    this.categories = await this.sanity.fetchMenu();
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      const seo = inject(SeoService);
      seo.update({
        title: 'Menu – Amruth Royal Cuisine',
        description: 'Explore our menu of starters, curries, biryani and more.',
        url: 'https://amruth.example/menu'
      });
    }
  }
}
