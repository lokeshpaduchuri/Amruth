import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MenuCardData {
  title: string;
  description: string;
  price: number;
  spice: 'mild' | 'med' | 'hot';
  veg: 'veg' | 'vegan' | 'none';
  image?: string;
}

@Component({
  standalone: true,
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  imports: [CommonModule],
  host: { class: 'border rounded-md p-4 bg-white shadow-sm' }
})
export class MenuCardComponent {
  @Input({ required: true }) item!: MenuCardData;
}
