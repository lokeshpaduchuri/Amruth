import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../shared/sanity.service';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  imports: [CommonModule]
})
export class TestimonialsComponent implements OnInit {
  private sanity = inject(SanityService);
  testimonials = this.sanity.fetchTestimonials();

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const seo = inject(SeoService);
      seo.update({
        title: 'Testimonials – Amruth Royal Cuisine',
        description: 'Hear from our guests.',
        url: 'https://amruth.example/testimonials'
      });
    }
  }
}
