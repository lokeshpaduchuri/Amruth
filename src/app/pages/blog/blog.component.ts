import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SeoService } from '../../seo.service';
import { getClient } from '../../sanity/client';
import { Post, postSchema } from '../../sanity/schemas';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';

@Component({
  standalone: true,
  imports: [NgFor, BlogCardComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  private seo = inject(SeoService);

  async ngOnInit() {
    this.seo.update('Blog', 'Latest news and updates');
    const query = `*[_type=="post"]{_id,title,slug}`;
    const c = getClient();
    if (!c) return; // silently no posts when not configured
    const data = await c.fetch(query);
    this.posts = postSchema.pick({ _id: true, title: true, slug: true }).array().parse(data);
  }
}
