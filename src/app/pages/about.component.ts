import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';
import { inject, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [CommonModule]
})
export class AboutComponent implements OnInit {
  

  seo: any;

  ngOnInit() {
  this.seo = inject(SeoService);
    this.seo.update({
      title: 'About Amruth Royal Cuisine',
      description: 'Our story and passion for authentic Indian cuisine.',
      url: 'https://amruth.example/about'
    });
  }
}
