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

  className = input('');

  classes = computed(() =>
    cn((textVariants[this.variant()] ?? textVariants['body']).classes, this.className()),
  );
}
