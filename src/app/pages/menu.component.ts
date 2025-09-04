import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService, MenuItem } from '../shared/sanity.service';
import { SeoService } from '../shared/seo.service';
import { MenuCardComponent } from '../components/menu-card.component';

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [CommonModule, MenuCardComponent]
})
export class MenuComponent implements OnInit {
  private sanity = inject(SanityService);

  categories: { title: string; items: MenuItem[] }[] = [];

  async ngOnInit() {
    this.categories = await this.sanity.fetchMenu();
    if (typeof window !== 'undefined') {
      const seo = inject(SeoService);
      seo.update({
        title: 'Menu – Amruth Royal Cuisine',
        description: 'Explore our menu of starters, curries, biryani and more.',
        url: 'https://amruth.example/menu'
      });
    }
  }
}
