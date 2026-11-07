import { Component, inject } from '@angular/core';
import { Input } from '../../../../../../../shared/components/app-ui/input/input';
import { ImageUpload } from '../image-upload/image-upload';
import { CreateEventService } from '../../create-event-service';
import { EVENT_TYPE_OPTIONS } from '../utils';
import { FormField } from '@angular/forms/signals';

@Component({
  imports: [Input, ImageUpload, FormField],
  selector: 'app-event-details-step',
  styleUrl: './event-details-step.css',
  templateUrl: './event-details-step.html',
})
export class EventDetailsStep {
  protected readonly createEventService = inject(CreateEventService);
  protected readonly form = this.createEventService.form;
  protected readonly typeOptions = EVENT_TYPE_OPTIONS;
}
