import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon, IconName } from '../icon/icon';
import { Field, FormField } from '@angular/forms/signals';
import { cn } from '../../../utils/cn';

@Component({
  selector: 'app-input',
  imports: [Icon, FormField],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  label = input<string>();
  // placeholder = input<string>('');
  // type = input<'text' | 'email' | 'password' | 'number' | 'date' | 'time'>('text');
  leftIcon = input<IconName>();
  rightIcon = input<IconName>();
  id = input();
  cn = cn;
  inputClass = input<string>();
  // field = input.required<Field<any, string | number>>();
}
