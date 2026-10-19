import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Text } from '../text/text';
import { cn } from '../../../utils/cn';
import { Icon } from '../icon/icon';
import { IconProps, TextProps } from '../app_types/text_types';

@Component({
  selector: 'app-button',
  imports: [Text, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  cn = cn;
  textProps = input<TextProps>();
  iconProps = input<IconProps>();
  btnClass = input<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
}
