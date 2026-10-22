import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TextVariant } from '../app_types/text_types';
import { cn } from '../../../utils/cn';
import { textVariants } from '../utils/typography';

@Component({
  selector: '[appText]',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './text.html',
  styleUrl: './text.css',
  host: { '[class]': 'classes()' },
})
export class Text {
  variant = input<TextVariant>('body');

  // className = input('');

  // text = input.required<string>();

  // config = computed(() => textVariants[this.variant()]);
  // classes = computed(() => cn(this.config().classes, this.className()));

  // variant = input<TextVariant>('body', { alias: 'appText' });

  className = input('');

  classes = computed(() =>
    cn((textVariants[this.variant()] ?? textVariants['body']).classes, this.className()),
  );
}
