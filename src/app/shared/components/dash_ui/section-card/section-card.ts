import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconName, Icon } from '../../app-ui/icon/icon';
import { Text } from '../../app-ui/text/text';
import { Button } from '../../app-ui/button/button';

@Component({
  imports: [Icon, Text, Button],
  selector: 'app-section-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './section-card.css',
  templateUrl: './section-card.html',
})
export class SectionCard {
  title = input.required<string>();
  icon = input<IconName>();
  actionLabel = input<string>();
  actionClick = output<void>();
}
