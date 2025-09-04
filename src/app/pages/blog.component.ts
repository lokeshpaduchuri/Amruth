import { Component, OnInit, inject } from '@angular/core';
import { SanityService } from '../shared/sanity.service';
import { CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  imports: [CommonModule, RouterLink]
})
export class BlogComponent implements OnInit {
  private sanity = inject(SanityService);
  posts = this.sanity.fetchPosts();

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const seo = inject(SeoService);
      seo.update({
        title: 'Blog – Amruth Royal Cuisine',
        description: 'News and recipes from our kitchen.',
        url: 'https://amruth.example/blog'
      });
    }
  }
}
