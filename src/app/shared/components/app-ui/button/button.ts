import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Text } from '../text/text';
import { cn } from '../../../utils/cn';
import { Icon } from '../icon/icon';
import { IconProps, TextProps } from '../app_types/text_types';

@Component({
  selector: 'button[appButton]',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.html',
  styleUrl: './button.css',
  host: {
    '[class]': 'computedClass()',
    '[attr.aria-busy]': 'loading()',
  },
})
export class Button {
  cn = cn;
  iconProps = input<IconProps>();
  btnClass = input<string>();
  loading = input<boolean>(false);

  computedClass = computed(() =>
    cn(
      'text-white bg-champagne rounded-xl px-6 py-3.5 lg:p-3.5 cursor-pointer text-base font-semibold flex items-center gap-4 justify-center text-sm',
      // 'text-white bg-champagne w-full rounded-xl p-2 cursor-pointer text-sm font-semibold flex items-center gap-4 justify-center',
      this.loading() && 'pointer-events-none opacity-70',
      this.btnClass(),
    ),
  );
}
