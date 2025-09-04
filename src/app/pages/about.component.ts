import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [CommonModule]
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      const seo = inject(SeoService);
      seo.update({
        title: 'About Amruth Royal Cuisine',
        description: 'Our story and passion for authentic Indian cuisine.',
        url: 'https://amruth.example/about'
      });
    }
  }
}
