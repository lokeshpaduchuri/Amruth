import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  template: `<p>Home works!</p>`,
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }
}
