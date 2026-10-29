import { Component, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-review',
  styleUrl: './review.css',
  templateUrl: './review.html',
})
export class Review {
  step = model.required<number>();
}
