import { Component, Input } from '@angular/core';
import { Testimonial } from '../../sanity/schemas';

@Component({
  standalone: true,
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
})
export class TestimonialComponent {
  @Input() test!: Testimonial;
}
