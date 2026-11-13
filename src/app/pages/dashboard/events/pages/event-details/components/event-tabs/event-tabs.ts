import { Component } from '@angular/core';
import { eventOverviewData } from '../../data';
import { Text } from '../../../../../../../shared/components/app-ui/text/text';

@Component({
  imports: [Text],
  selector: 'app-event-tabs',
  styleUrl: './event-tabs.css',
  templateUrl: './event-tabs.html',
})
export class EventTabs {
  eventDetailData = eventOverviewData;
}
