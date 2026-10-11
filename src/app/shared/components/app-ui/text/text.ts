import { Component, input } from '@angular/core';
import { TextVariant } from '../app_types/text_types';
import { cn } from '../../../utils/cn';
import { textVariants } from '../utils/typography';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.html',
  styleUrl: './text.css',
})
export class Text {
  variant = input<TextVariant>('body');

  className = input('');

  text = input.required<string>();

  config() {
    return textVariants[this.variant()];
  }

  classes() {
    return cn(this.config().classes, this.className());
  }
}
