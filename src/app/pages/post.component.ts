import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { SeoService } from '../seo.service';
import { client } from '../sanity/client';
import groq from 'groq';
import { Post, postSchema } from '../sanity/schemas';

@Component({
  standalone: true,
  imports: [NgIf],
  template: `
    <article *ngIf="post">
      <h1 class="text-3xl font-bold mb-4">{{post.title}}</h1>
      <div [innerHTML]="post.body"></div>
    </article>
  `,
})
export class PostComponent implements OnInit {
  post?: Post;
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const query = groq`*[_type=="post" && slug.current==$slug][0]{_id,title,slug,body}`;
    const data = await client.fetch(query, { slug });
    this.post = postSchema.parse(data);
    this.seo.update(this.post.title, this.post.title);
  }
}
