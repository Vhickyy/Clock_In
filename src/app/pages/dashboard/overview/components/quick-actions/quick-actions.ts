import { Component, input, output } from '@angular/core';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { SectionCard } from '../../../../../shared/components/dash_ui/section-card/section-card';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';
import { QuickAction } from '../../types';

@Component({
  imports: [Text, SectionCard, Icon],
  selector: 'app-quick-actions',
  styleUrl: './quick-actions.css',
  templateUrl: './quick-actions.html',
})
export class QuickActions {
  actions = input.required<QuickAction[]>();
  selected = output<string>();
}
