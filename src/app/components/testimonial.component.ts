import { Component, Input } from '@angular/core';
import { Testimonial } from '../sanity/schemas';

@Component({
  standalone: true,
  selector: 'app-testimonial',
  template: `
    <blockquote class="p-4 border-l-4 border-teal bg-cream">
      <p class="italic">“{{test.quote}}”</p>
      <footer class="text-sm mt-2">— {{test.author}}</footer>
    </blockquote>
  `,
})
export class TestimonialComponent {
  @Input() test!: Testimonial;
}
