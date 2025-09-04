import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface MetaConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  update(cfg: MetaConfig) {
    this.title.setTitle(cfg.title);
    this.meta.updateTag({ name: 'description', content: cfg.description });
    this.meta.updateTag({ property: 'og:title', content: cfg.title });
    this.meta.updateTag({ property: 'og:description', content: cfg.description });
    this.meta.updateTag({ property: 'og:type', content: cfg.type ?? 'website' });
    this.meta.updateTag({ property: 'og:url', content: cfg.url });
    if (cfg.image) this.meta.updateTag({ property: 'og:image', content: cfg.image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  jsonLdWebsite(name: string, url: string) {
    return { '@context': 'https://schema.org', '@type': 'WebSite', name, url };
  }

  jsonLdOrganization(name: string, url: string, logo: string) {
    return { '@context': 'https://schema.org', '@type': 'Organization', name, url, logo };
  }

  jsonLdLocalBusiness(data: {
    name: string;
    url: string;
    phone: string;
    address: string;
    geo: { lat: number; lng: number };
    image?: string;
    menu?: string;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: data.name,
      url: data.url,
      telephone: data.phone,
      image: data.image,
      menu: data.menu,
      address: { '@type': 'PostalAddress', streetAddress: data.address },
      geo: { '@type': 'GeoCoordinates', latitude: data.geo.lat, longitude: data.geo.lng }
    };
  }

  jsonLdFAQ(items: { q: string; a: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(i => ({
        '@type': 'Question',
        name: i.q,
        acceptedAnswer: { '@type': 'Answer', text: i.a }
      }))
    };
  }

  jsonLdArticle(post: {
    title: string;
    url: string;
    image: string;
    date: string;
    author: string;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      datePublished: post.date,
      author: { '@type': 'Person', name: post.author },
      mainEntityOfPage: post.url,
      image: [post.image]
    };
  }
}
