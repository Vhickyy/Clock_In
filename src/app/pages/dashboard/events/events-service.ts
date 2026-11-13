import { computed, Service, signal } from '@angular/core';
import { ColumnDef } from '@tanstack/angular-table';
import { EventRow, RowAction } from './types';
import { Crumb } from '../../../shared/components/app-ui/app_types/text_types';
import { EVENT_STATS, EVENT_COLUMNS, STATUS_TONE, EVENTS, DATE_RANGE_OPTIONS } from './data';
import { httpResource } from '@angular/common/http';
import { EventOverview, Guest, GuestSummary } from './models/api';

@Service()
export class EventsService {
  crumbs: Crumb[] = [{ label: 'Dashboard', route: '/dashboard' }, { label: 'Events' }];
  stats = EVENT_STATS;
  columns = EVENT_COLUMNS;
  statusTone = STATUS_TONE;

  // Source of truth + filter state, all signals
  events = signal<EventRow[]>(EVENTS);
  search = signal('');
  status = signal('all');
  type = signal('all');
  range = signal('all');

  // Derived state: recomputes only when one of the signals above changes
  filteredEvents = computed(() => {
    const query = this.search().trim().toLowerCase();
    const status = this.status();
    const type = this.type();
    const range = DATE_RANGE_OPTIONS.find((r) => r.value === this.range());

    return this.events().filter((e) => {
      const time = new Date(e.startsAt).getTime();
      const matchesSearch =
        !query || e.name.toLowerCase().includes(query) || e.venue.toLowerCase().includes(query);
      const matchesStatus = status === 'all' || e.status === status;
      const matchesType = type === 'all' || e.category === type;
      const matchesRange =
        !range?.from || (time >= Date.parse(range.from) && time <= Date.parse(range.to!));

      return matchesSearch && matchesStatus && matchesType && matchesRange;
    });
  });

  // EVENT_COLUMNS: ColumnDef<EventRow>[] = [
  //   { id: 'event', accessorKey: 'name', header: 'Event' },
  //   { id: 'date', accessorKey: 'startsAt', header: 'Date & Time' },
  //   { accessorKey: 'venue', header: 'Venue' },
  //   { accessorKey: 'invitations', header: 'Invitations' },
  //   { accessorKey: 'rsvps', header: 'RSVPs' },
  //   { accessorKey: 'checkedIn', header: 'Checked In' },
  //   { accessorKey: 'status', header: 'Status' },
  //   { id: 'actions', header: 'Actions' },
  // ];

  onRowAction(action: RowAction, event: EventRow): void {
    switch (action) {
      case 'delete':
        // Immutable update, so OnPush children see a new array reference
        this.events.update((list) => list.filter((e) => e.id !== event.id)); // TODO: confirm dialog + API
        break;
      default:
        console.log(action, event.id); // TODO: view / edit / duplicate
    }
  }

  clear(): void {
    this.search.set('');
    this.status.set('all');
    this.type.set('all');
    this.range.set('all');
  }

  // event details
  eventDetailsRes = httpResource<EventOverview>(() => '/data/eventdetails.json');

  // guest lists
  guestListsRes = httpResource<Guest[]>(() => '/data/guests.json');

  guestSummary = computed<GuestSummary | null>(() => {
    if (this.guestListsRes.hasValue()) {
      const counts = { total: 0, checkedIn: 0, pending: 0, invited: 0 };
      for (const g of this.guestListsRes.value()) {
        counts.total++;
        if (g.status === 'checked_in') counts.checkedIn++;
        else if (g.status === 'pending') counts.pending++;
        else counts.invited++;
      }
      return counts;
    }
    return null;
  });
}
