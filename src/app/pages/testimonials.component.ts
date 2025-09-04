import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SanityService } from '../shared/sanity.service';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit {
  private sanity = inject(SanityService);
  testimonials = this.sanity.fetchTestimonials();

  ngOnInit() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      const seo = inject(SeoService);
      seo.update({
        title: 'Testimonials – Amruth Royal Cuisine',
        description: 'Hear from our guests.',
        url: 'https://amruth.example/testimonials'
      });
    }
  }
}
