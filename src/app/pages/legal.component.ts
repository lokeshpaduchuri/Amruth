import { Component, OnInit, inject } from '@angular/core';
import { Injector,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  imports: [CommonModule]
})
export class LegalComponent implements OnInit {
  sections: { title: string; content: string }[] = [];
  
  async ngOnInit() {
  const seo = inject(SeoService);
  const platformId = inject(Injector).get(PLATFORM_ID)
    if (isPlatformBrowser(platformId)) {
      const [privacy, tos] = await Promise.all([
        fetch('/data/legal/privacy.md').then(r => r.text()),
        fetch('/data/legal/tos.md').then(r => r.text())
      ]);
      this.sections = [
        { title: 'Privacy Policy', content: privacy },
        { title: 'Terms of Service', content: tos }
      ];
    }
    seo.update({
      title: 'Legal – Amruth Royal Cuisine',
      description: 'Our privacy policy and terms of service.',
      url: 'https://amruth.example/legal'
    });
  }
}
