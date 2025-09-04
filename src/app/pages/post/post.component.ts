import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { SeoService } from '../../seo.service';
import { getClient } from '../../sanity/client';
import { Post, postSchema } from '../../sanity/schemas';

@Component({
  standalone: true,
  imports: [NgIf],
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  post?: Post;
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const query = `*[_type=="post" && slug.current==$slug][0]{_id,title,slug,body}`;
    const c = getClient();
    if (!c) return;
    const data = await c.fetch(query, { slug });
    this.post = postSchema.parse(data);
    this.seo.update(this.post.title, this.post.title);
  }
}
