import { Component, output } from '@angular/core';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';

@Component({
  imports: [Text, Icon],
  selector: 'app-support-card',
  styleUrl: './support-card.css',
  templateUrl: './support-card.html',
})
export class SupportCard {
  contact = output<void>();
}
