import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SanityService, Post } from '../shared/sanity.service';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private sanity = inject(SanityService);
  post?: Post;

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.post = await this.sanity.fetchPost(slug);
    if (this.post && isPlatformBrowser(inject(PLATFORM_ID))) {
      const seo = inject(SeoService);
      seo.update({
        title: this.post.title,
        description: this.post.excerpt,
        url: `https://amruth.example/blog/${slug}`
      });
    }
  }
}
