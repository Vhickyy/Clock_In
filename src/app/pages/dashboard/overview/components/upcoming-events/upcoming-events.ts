import { Component, input, output } from '@angular/core';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { SectionCard } from '../../../../../shared/components/dash_ui/section-card/section-card';
import { UpcomingEvent } from '../../types';

@Component({
  imports: [Text, SectionCard],
  selector: 'app-upcoming-events',
  styleUrl: './upcoming-events.css',
  templateUrl: './upcoming-events.html',
})
export class UpcomingEvents {
  events = input.required<UpcomingEvent[]>();
  viewAll = output<void>();
  // protected readonly tone = STATUS_TONE;
}
