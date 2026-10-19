import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { Icon, IconName } from '../icon/icon';
import { SelectOption } from '../app_types/text_types';

@Component({
  imports: [Icon],
  selector: 'app-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './select.css',
  templateUrl: './select.html',
})
export class Select {
  options = input.required<SelectOption[]>();
  value = model('');
  icon = input<IconName>();
  ariaLabel = input.required<string>();

  protected onChange(event: Event): void {
    this.value.set((event.target as HTMLSelectElement).value);
  }
}
