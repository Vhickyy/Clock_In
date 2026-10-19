import { Component, input, output } from '@angular/core';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { SectionCard } from '../../../../../shared/components/dash_ui/section-card/section-card';
import { ActivityItem } from '../../types';

@Component({
  imports: [Icon, Text, SectionCard],
  selector: 'app-activity-list',
  styleUrl: './activity-list.css',
  templateUrl: './activity-list.html',
})
export class ActivityList {
  items = input.required<ActivityItem[]>();
  viewAll = output<void>();
}
