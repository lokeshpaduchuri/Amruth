import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { SeoService } from '../../seo.service';
import { getClient } from '../../sanity/client';
import { MenuCategory, menuCategorySchema } from '../../sanity/schemas';
import { environment } from '../../../environments/environment';
import { MenuCardComponent } from '../../components/menu-card/menu-card.component';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, MenuCardComponent, AsyncPipe],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  categories: MenuCategory[] = [];
  loading = true;
  error: string | null = null;
  private seo = inject(SeoService);

  async ngOnInit() {
    this.seo.update('Menu', 'Explore our delicious menu');

    const hasProject = (environment.SANITY_PROJECT_ID ?? '').trim().length > 0;
    const hasDataset = (environment.SANITY_DATASET ?? '').trim().length > 0;
    const configured = hasProject && hasDataset;
    if (!configured) {
      this.error = 'Menu is unavailable: Sanity is not configured. Set SANITY_PROJECT_ID and SANITY_DATASET in src/environments/environment.ts';
      this.categories = [];
      this.loading = false;
      return;
    }

    try {
      const query = `*[_type=="menuCategory"]{_id,title,items[]->{_id,name,price,description}}`;
      const c = getClient();
      if (!c) throw new Error('Sanity client unavailable');
      const data = await c.fetch(query);
      this.categories = menuCategorySchema.array().parse(data);
    } catch (err) {
      console.error('Failed to load menu categories', err);
      this.categories = [];
      this.error = 'Menu is unavailable right now. If you are developing locally, set SANITY_PROJECT_ID and SANITY_DATASET in src/environments/environment.ts.';
    } finally {
      this.loading = false;
    }
  }
}

// Intentionally no sample fallback: when Sanity is not configured,
// we display a clear error state so the user can fix setup.
