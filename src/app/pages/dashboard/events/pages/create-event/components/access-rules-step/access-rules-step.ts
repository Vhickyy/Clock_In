import { Component, inject } from '@angular/core';
import { Input } from '../../../../../../../shared/components/app-ui/input/input';
import { CreateEventService } from '../../create-event-service';

@Component({
  imports: [Input],
  selector: 'app-access-rules-step',
  styleUrl: './access-rules-step.css',
  templateUrl: './access-rules-step.html',
})
export class AccessRulesStep {
  protected readonly createEventService = inject(CreateEventService);
  protected readonly form = this.createEventService.form;
}
