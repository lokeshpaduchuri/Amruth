import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  template: `<p>Test works!</p>`,
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    console.log('TestComponent initialized');
  }
}
