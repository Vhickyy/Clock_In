import { Component, inject } from '@angular/core';
import { EventsService } from '../../events-service';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';
import { RouterLink } from '@angular/router';
import { eventOverviewData } from './data';
import { CommonModule } from '@angular/common';
import { EventTabs } from './components/event-tabs/event-tabs';

@Component({
  imports: [Text, Icon, RouterLink, CommonModule, EventTabs],
  selector: 'app-event-details',
  styleUrl: './event-details.css',
  templateUrl: './event-details.html',
})
export class EventDetails {
  eventService = inject(EventsService);
  // eventHasVal = this.eventService.eventDetailsRes.hasValue();
  // eventDetail = this.eventService.eventDetailsRes?.value();
  eventDetailRes = this.eventService.eventDetailsRes;
  eventDetailData = eventOverviewData;
}
