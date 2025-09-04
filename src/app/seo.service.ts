import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../site.config';
import { MetaTag } from './seo';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  update(title: string, description: string, extra: MetaTag[] = []) {
    const fullTitle = `${title} | ${SITE.name}`;
    this.title.setTitle(fullTitle);
    const tags: MetaTag[] = [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: SITE.ogImage },
      { property: 'og:url', content: SITE.url + location.pathname },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'canonical', content: SITE.url + location.pathname },
      ...extra,
    ];
    if (SITE.staging) {
      tags.push({ name: 'robots', content: 'noindex' });
    }
    tags.forEach((t) => {
      const attr = t.name ? { name: t.name } : { property: t.property! };
      this.meta.updateTag({ ...attr, content: t.content } as any);
    });
  }
}
