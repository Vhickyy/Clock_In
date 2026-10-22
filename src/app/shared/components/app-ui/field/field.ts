import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName, Icon } from '../icon/icon';

@Component({
  imports: [Icon],
  selector: 'app-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './field.css',
  templateUrl: './field.html',
})
export class Field {
  label = input<string>();
  // placeholder = input<string>('');
  // type = input<'text' | 'email' | 'password' | 'number' | 'date' | 'time'>('text');
  leftIcon = input<IconName>();
  rightIcon = input<IconName>();
}
