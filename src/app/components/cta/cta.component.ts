import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-cta',
  imports: [RouterLink],
  templateUrl: './cta.component.html',
})
export class CTAComponent {
  @Input() link = '';
  @Input() label = '';
}
