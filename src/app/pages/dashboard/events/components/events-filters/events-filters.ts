import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { Select } from '../../../../../shared/components/app-ui/select/select';
import { Button } from '../../../../../shared/components/app-ui/button/button';
import { STATUS_OPTIONS, TYPE_OPTIONS, DATE_RANGE_OPTIONS } from '../../data';
import { EventsService } from '../../events-service';

@Component({
  imports: [Select, Button],
  selector: 'app-events-filters',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './events-filters.css',
  templateUrl: './events-filters.html',
})
export class EventsFilters {
  eventService = inject(EventsService);
  // search = model('');
  // status = model('all');
  // type = model('all');
  // range = model('all');

  protected readonly statusOptions = STATUS_OPTIONS;
  protected readonly typeOptions = TYPE_OPTIONS;
  protected readonly rangeOptions = DATE_RANGE_OPTIONS;
}
