import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import groq from 'groq';

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

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01'
});

@Injectable({ providedIn: 'root' })
export class SanityService {
  fetchFeaturedMenu(): Promise<MenuItem[]> {
    return client.fetch(groq`*[_type == "menuItem" && featured == true && available == true]{title,description,price,spiceLevel,vegVegan,image}`);
  }

  fetchTestimonials() {
    return client.fetch(groq`*[_type == "testimonial"]{author,quote,rating}`);
  }

  async fetchMenu() {
    return client.fetch(groq`*[_type == "menuCategory"]|order(order){title,'items':*[_type=="menuItem" && references(^._id) && available==true]{title,description,price,spiceLevel,vegVegan,image}}`);
  }

  fetchPublicRoutes(): Promise<string[]> {
    return client.fetch(groq`*[_type in ["post"] && defined(slug.current)][].slug.current`).then((slugs: string[]) => ['/', '/about', '/menu', '/contact', '/faqs', '/testimonials', '/legal', '/locations', '/blog', ...slugs.map(s => '/blog/' + s)]);
  }

  fetchPosts() {
    return client.fetch(groq`*[_type=="post"]{title,'slug':slug.current}`);
  }

  fetchPost(slug: string): Promise<Post> {
    return client.fetch(groq`*[_type=="post" && slug.current==$slug][0]{title,excerpt,'slug':slug.current,body,coverImage}`, { slug });
  }
}
