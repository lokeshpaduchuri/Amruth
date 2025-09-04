import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../sanity/schemas';

@Component({
  standalone: true,
  selector: 'app-blog-card',
  imports: [RouterLink],
  template: `
    <article class="border p-4 rounded bg-white shadow">
      <h3 class="font-semibold mb-2">{{post.title}}</h3>
      <a [routerLink]="['/blog', post.slug.current]" class="text-teal">Read more</a>
    </article>
  `,
})
export class BlogCardComponent {
  @Input() post!: Post;
}
