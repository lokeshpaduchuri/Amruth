import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SeoService } from '../seo.service';
import { client } from '../sanity/client';
import groq from 'groq';
import { Post, postSchema } from '../sanity/schemas';
import { BlogCardComponent } from '../components/blog-card.component';

@Component({
  standalone: true,
  imports: [NgFor, BlogCardComponent],
  template: `
    <h2 class="text-2xl font-bold mb-4">Blog</h2>
    <div class="grid gap-4">
      <app-blog-card *ngFor="let post of posts" [post]="post" />
    </div>
  `,
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  private seo = inject(SeoService);

  async ngOnInit() {
    this.seo.update('Blog', 'Latest news and updates');
    const query = groq`*[_type=="post"]{_id,title,slug}`;
    const data = await client.fetch(query);
    this.posts = postSchema.pick({ _id: true, title: true, slug: true }).array().parse(data);
  }
}
