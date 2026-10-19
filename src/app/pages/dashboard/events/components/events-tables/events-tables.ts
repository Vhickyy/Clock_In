import { Component, computed, inject, input } from '@angular/core';
import { Table } from '../../../../../shared/components/app-ui/table/table';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { EventsActionMenu } from '../events-action-menu/events-action-menu';
import { DATE_RANGE_OPTIONS, EVENT_COLUMNS } from '../../data';
import { RowAction, EventRow } from '../../types';
import { EventsService } from '../../events-service';

@Component({
  imports: [Table, Text, EventsActionMenu],
  selector: 'app-events-tables',
  styleUrl: './events-tables.css',
  templateUrl: './events-tables.html',
})
export class EventsTables {
  eventService = inject(EventsService);
}
