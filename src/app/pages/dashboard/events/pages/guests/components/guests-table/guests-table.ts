import { Component, inject } from '@angular/core';
import { Table } from '../../../../../../../shared/components/app-ui/table/table';
import { EventsService } from '../../../../events-service';
import { GUEST_COLUMNS } from '../../data';
import { Text } from '../../../../../../../shared/components/app-ui/text/text';

@Component({
  imports: [Table, Text],
  selector: 'app-guests-table',
  styleUrl: './guests-table.css',
  templateUrl: './guests-table.html',
})
export class GuestsTable {
  eventService = inject(EventsService);
  guestRes = this.eventService.guestListsRes;
  guestCols = GUEST_COLUMNS;
}
