import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { EventsFilters } from './components/events-filters/events-filters';
import { StatCard } from '../../../shared/components/dash_ui/stat-card/stat-card';
import { Button } from '../../../shared/components/app-ui/button/button';
import { Crumb } from '../../../shared/components/app-ui/app_types/text_types';
import { EVENT_STATS, EVENT_COLUMNS, STATUS_TONE, EVENTS, DATE_RANGE_OPTIONS } from './data';
import { EventRow } from './types';
import { EventsService } from './events-service';
import { EventsTables } from './components/events-tables/events-tables';
import { Text } from '../../../shared/components/app-ui/text/text';
import { Router } from '@angular/router';
import { Icon } from '../../../shared/components/app-ui/icon/icon';

@Component({
  imports: [EventsFilters, StatCard, Button, EventsTables, Text, Icon],
  selector: 'app-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './events.css',
  templateUrl: './events.html',
})
export class Events {
  eventService = inject(EventsService);
  router = inject(Router);
}
