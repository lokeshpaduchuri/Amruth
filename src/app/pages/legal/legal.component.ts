import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { SeoService } from '../../seo.service';

@Component({
  standalone: true,
  imports: [HttpClientModule, NgIf],
  templateUrl: './legal.component.html',
})
export class LegalComponent implements OnInit {
  privacy = '';
  tos = '';
  private http = inject(HttpClient);
  private seo = inject(SeoService);

  async ngOnInit() {
    this.seo.update('Legal', 'Privacy policy and terms of service');
    this.privacy = await firstValueFrom(
      this.http.get('/data/legal/privacy.md', { responseType: 'text' })
    );
    this.tos = await firstValueFrom(
      this.http.get('/data/legal/tos.md', { responseType: 'text' })
    );
  }
}
