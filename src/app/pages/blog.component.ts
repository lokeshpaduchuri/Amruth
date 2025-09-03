import { Component, OnInit, inject } from '@angular/core';
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
  private seo = inject(SeoService);
  posts = this.sanity.fetchPosts();

  ngOnInit() {
    this.seo.update({
      title: 'Blog – Amruth Royal Cuisine',
      description: 'News and recipes from our kitchen.',
      url: 'https://amruth.example/blog'
    });
  }
}
