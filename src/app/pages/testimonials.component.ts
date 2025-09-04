import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SeoService } from '../seo.service';
import { client } from '../sanity/client';
import groq from 'groq';
import { Testimonial, testimonialSchema } from '../sanity/schemas';
import { TestimonialComponent } from '../components/testimonial.component';

@Component({
  standalone: true,
  imports: [NgFor, TestimonialComponent],
  template: `
    <h2 class="text-2xl font-bold mb-4">Testimonials</h2>
    <app-testimonial *ngFor="let t of testimonials" [test]="t" class="mb-4" />
  `,
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  private seo = inject(SeoService);

  async ngOnInit() {
    this.seo.update('Testimonials', 'Hear from our customers');
    const query = groq`*[_type=="testimonial"]{_id,author,quote}`;
    const data = await client.fetch(query);
    this.testimonials = testimonialSchema.array().parse(data);
  }
}
