import { Component } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import { inject, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'About Amruth Royal Cuisine',
      description: 'Our story and passion for authentic Indian cuisine.',
      url: 'https://amruth.example/about'
    });
  }
}
