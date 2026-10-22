import { Component, computed, inject } from '@angular/core';
import { Input } from '../../../../../../../shared/components/app-ui/input/input';
import { Text } from '../../../../../../../shared/components/app-ui/text/text';
import { CreateEventService } from '../../create-event-service';
import { guestsPerInvitation, INVITATION_OPTIONS } from '../../data';

@Component({
  imports: [Input, Text],
  selector: 'app-invitations-step',
  styleUrl: './invitations-step.css',
  templateUrl: './invitations-step.html',
})
export class InvitationsStep {
  protected readonly createEventService = inject(CreateEventService);
  protected readonly form = this.createEventService.form;
  protected readonly options = INVITATION_OPTIONS;

  protected capacityHint = computed(() => {
    const n = guestsPerInvitation(this.createEventService.model());
    return `Each invitation admits ${n} guest${n === 1 ? '' : 's'}.`;
  });
}
