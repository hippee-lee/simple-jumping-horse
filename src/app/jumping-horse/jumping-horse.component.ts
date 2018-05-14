import { Component, OnInit } from '@angular/core';
let herdSize = 0;

@Component({
  selector: 'app-jumping-horse',
  template: `
    <div class="horse">🐴 {{brand}}</div>
  `,
  styleUrls: ['./jumping-horse.component.scss']
})
export class JumpingHorseComponent {
  brand: number;
  constructor() {
    this.brand = ++herdSize;
  }
}
