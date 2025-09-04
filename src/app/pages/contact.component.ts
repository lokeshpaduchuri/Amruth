import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SeoService } from '../shared/seo.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  private fb = new FormBuilder();
  sent = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    website: ['']
  });

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const seo = inject(SeoService);
      seo.update({
        title: 'Contact Amruth Royal Cuisine',
        description: 'Get in touch with our team for reservations and inquiries.',
        url: 'https://amruth.example/contact'
      });
    }
  }

  async submit() {
    if (this.form.invalid || this.form.value.website) return;
    await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.form.value)
    });
    this.sent = true;
    this.form.reset();
  }
}
