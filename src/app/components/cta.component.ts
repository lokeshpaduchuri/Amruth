import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  host: { class: 'bg-teal text-white text-center py-16 mt-20' }
})
export class CtaComponent {
  @Input() title!: string;
  @Input() buttonLabel!: string;
  @Input() buttonLink!: string;
}
