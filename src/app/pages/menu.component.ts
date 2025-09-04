import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { SeoService } from '../seo.service';
import { client } from '../sanity/client';
import groq from 'groq';
import { MenuCategory, menuCategorySchema } from '../sanity/schemas';
import { MenuCardComponent } from '../components/menu-card.component';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, MenuCardComponent, AsyncPipe],
  template: `
    <h2 class="text-2xl font-bold mb-4">Menu</h2>
    <section *ngFor="let cat of categories">
      <h3 class="text-xl font-semibold my-2">{{cat.title}}</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <app-menu-card *ngFor="let item of cat.items" [item]="item" />
      </div>
    </section>
  `,
})
export class MenuComponent implements OnInit {
  categories: MenuCategory[] = [];
  private seo = inject(SeoService);

  async ngOnInit() {
    this.seo.update('Menu', 'Explore our delicious menu');
    const query = groq`*[_type=="menuCategory"]{_id,title,items[]->{_id,name,price,description}}`;
    const data = await client.fetch(query);
    this.categories = menuCategorySchema.array().parse(data);
  }
}
