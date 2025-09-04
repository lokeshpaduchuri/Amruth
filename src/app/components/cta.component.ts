import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  imports: [RouterLink],
  host: { class: 'bg-teal text-white text-center py-16 mt-20' }
})
export class CtaComponent {
  @Input() title!: string;
  @Input() buttonLabel!: string;
  @Input() buttonLink!: string;
}
