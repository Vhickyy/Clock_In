import { Component, computed, inject } from '@angular/core';
import { GuestsTable } from './components/guests-table/guests-table';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';
import { RouterLink } from '@angular/router';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { EventsService } from '../../events-service';
import { EventTabs } from '../event-details/components/event-tabs/event-tabs';
import { Input } from '../../../../../shared/components/app-ui/input/input';
import { FormField } from '@angular/forms/signals';

@Component({
  imports: [GuestsTable, Icon, RouterLink, Text, EventTabs, Input, FormField],
  selector: 'app-guests',
  styleUrl: './guests.css',
  templateUrl: './guests.html',
})
export class Guests {
  eventService = inject(EventsService);
  eventDetailRes = this.eventService.eventDetailsRes;
  summaryCards = computed(() => {
    const s = this.eventService.guestSummary();
    return [
      { id: 'total', label: 'Total Guests', value: s?.total, icon: 'usersRound' },
      { id: 'checkedIn', label: 'Checked In', value: s?.checkedIn, icon: 'circleCheck' },
      { id: 'pending', label: 'Pending', value: s?.pending, icon: 'clock' },
      { id: 'invited', label: 'Invited', value: s?.invited, icon: 'mail' },
    ];
  });
}
