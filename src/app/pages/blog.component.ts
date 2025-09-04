import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SanityService } from '../shared/sanity.service';
import { SeoService } from '../shared/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  imports: [RouterLink]
})
export class BlogComponent implements OnInit {
  private sanity = inject(SanityService);
  posts = this.sanity.fetchPosts();

  ngOnInit() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      const seo = inject(SeoService);
      seo.update({
        title: 'Blog – Amruth Royal Cuisine',
        description: 'News and recipes from our kitchen.',
        url: 'https://amruth.example/blog'
      });
    }
  }
}
