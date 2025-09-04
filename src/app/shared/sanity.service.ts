import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import groq from 'groq';
import { SANITY_DATASET, SANITY_PROJECT_ID } from './env';

export interface MenuItem {
  title: string;
  description: string;
  price: number;
  spiceLevel: 'mild' | 'med' | 'hot';
  vegVegan: 'veg' | 'vegan' | 'none';
  image?: string;
}

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  coverImage?: string;
}

let client: ReturnType<typeof createClient> | null = null;

function ensureClient() {
  if (client) return client;
  if (!SANITY_PROJECT_ID || !SANITY_DATASET) {
    return null;
  }
  client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    useCdn: true,
    apiVersion: '2024-01-01'
  });
  return client;
}

@Injectable({ providedIn: 'root' })
export class SanityService {
  fetchFeaturedMenu(): Promise<MenuItem[]> {
    const c = ensureClient();
    if (!c) return Promise.resolve([]);
    return c.fetch(groq`*[_type == "menuItem" && featured == true && available == true]{title,description,price,spiceLevel,vegVegan,image}`);
  }

  fetchTestimonials() {
    const c = ensureClient();
    if (!c) return Promise.resolve([]);
    return c.fetch(groq`*[_type == "testimonial"]{author,quote,rating}`);
  }

  async fetchMenu() {
    const c = ensureClient();
    if (!c) return Promise.resolve([]);
    return c.fetch(groq`*[_type == "menuCategory"]|order(order){title,'items':*[_type=="menuItem" && references(^._id) && available==true]{title,description,price,spiceLevel,vegVegan,image}}`);
  }

  fetchPublicRoutes(): Promise<string[]> {
    const c = ensureClient();
    if (!c) return Promise.resolve(['/', '/about', '/menu', '/contact', '/faqs', '/testimonials', '/legal', '/locations', '/blog']);
    return c.fetch(groq`*[_type in ["post"] && defined(slug.current)][].slug.current`).then((slugs: string[]) => ['/', '/about', '/menu', '/contact', '/faqs', '/testimonials', '/legal', '/locations', '/blog', ...slugs.map(s => '/blog/' + s)]);
  }

  fetchPosts() {
    const c = ensureClient();
    if (!c) return Promise.resolve([]);
    return c.fetch(groq`*[_type=="post"]{title,'slug':slug.current}`);
  }

  fetchPost(slug: string): Promise<Post> {
    const c = ensureClient();
    if (!c) return Promise.resolve({ title: 'Post not available', slug, excerpt: '', body: '' });
    return c.fetch(groq`*[_type=="post" && slug.current==$slug][0]{title,excerpt,'slug':slug.current,body,coverImage}`, { slug });
  }
}
