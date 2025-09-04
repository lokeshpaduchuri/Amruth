import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SeoService } from '../../seo.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private seo = inject(SeoService);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    bot: [''],
  });
  result = '';

  constructor() {
    this.seo.update('Contact', 'Contact Amruth Royal Cuisine');
  }

  submit() {
    if (this.form.value.bot) return;
    this.http
      .post('/.netlify/functions/contact', this.form.value)
      .subscribe({
        next: () => (this.result = 'Message sent!'),
        error: () => (this.result = 'Error sending message'),
      });
  }
}
