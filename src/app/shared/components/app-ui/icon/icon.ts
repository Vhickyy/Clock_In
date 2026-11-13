import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '../../../utils/cn';
import { ICONS } from '../../../icons';
import { LucideDynamicIcon } from '@lucide/angular';

export type IconName = keyof typeof ICONS;

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideDynamicIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  name = input.required<IconName>();
  size = input(17);
  strokeWidth = input(2);
  className = input<string>();
  cn = cn;

  selectedIcon = computed(() => ICONS[this.name()]);
}
