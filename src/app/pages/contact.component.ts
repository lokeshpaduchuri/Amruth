import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SeoService } from '../seo.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  template: `
    <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
    <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4 max-w-md">
      <input type="text" formControlName="name" placeholder="Name" class="w-full p-2 border" />
      <input type="email" formControlName="email" placeholder="Email" class="w-full p-2 border" />
      <textarea formControlName="message" placeholder="Message" class="w-full p-2 border"></textarea>
      <input type="text" formControlName="bot" class="hidden" aria-hidden="true" />
      <button type="submit" class="px-4 py-2 bg-teal text-cream" [disabled]="form.invalid">Send</button>
    </form>
    <p *ngIf="result" class="mt-4">{{result}}</p>
  `,
})
export class ContactComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    bot: [''],
  });
  result = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private seo: SeoService) {
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
