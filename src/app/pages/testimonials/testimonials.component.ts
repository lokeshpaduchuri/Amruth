import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SeoService } from '../../seo.service';
import { getClient } from '../../sanity/client';
import { Testimonial, testimonialSchema } from '../../sanity/schemas';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';

@Component({
  standalone: true,
  imports: [NgFor, TestimonialComponent],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  private seo = inject(SeoService);

  async ngOnInit() {
    this.seo.update('Testimonials', 'Hear from our customers');
    const query = `*[_type=="testimonial"]{_id,author,quote}`;
    const c = getClient();
    if (!c) return;
    const data = await c.fetch(query);
    this.testimonials = testimonialSchema.array().parse(data);
  }
}
