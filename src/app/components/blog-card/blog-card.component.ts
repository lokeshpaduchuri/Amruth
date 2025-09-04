import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../sanity/schemas';

@Component({
  standalone: true,
  selector: 'app-blog-card',
  imports: [RouterLink],
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {
  @Input() post!: Post;
}
