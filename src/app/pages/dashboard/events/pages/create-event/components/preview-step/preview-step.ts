import { formatDate } from '@angular/common';
import { Component, computed, inject, LOCALE_ID } from '@angular/core';
import { Text } from '../../../../../../../shared/components/app-ui/text/text';
import { Icon } from '../../../../../../../shared/components/app-ui/icon/icon';
import { SummaryGroup } from '../../../../types';
import { CreateEventService } from '../../create-event-service';
import { INVITATION_OPTIONS, guestsPerInvitation } from '../../data';

@Component({
  imports: [Text, Icon],
  selector: 'app-preview-step',
  styleUrl: './preview-step.css',
  templateUrl: './preview-step.html',
})
export class PreviewStep {
  protected readonly createEventService = inject(CreateEventService);
  private readonly locale = inject(LOCALE_ID);

  protected groups = computed<SummaryGroup[]>(() => {
    const m = this.createEventService.model();
    const fmt = (value: string, pattern: string) => {
      const d = new Date(value);
      return Number.isNaN(+d) ? '—' : formatDate(d, pattern, this.locale);
    };

    const invitationTitle =
      INVITATION_OPTIONS.find((o) => o.value === m.invitationType)?.title ?? '';
    const guests = guestsPerInvitation(m);
    const checkIn = [m.checkInQr && 'QR code', m.checkInManual && 'Manual code entry']
      .filter(Boolean)
      .join(', ');
    const description = m.description.trim();

    return [
      {
        title: 'Event',
        step: 0,
        rows: [
          { label: 'Event name', value: m.name },
          { label: 'Event type', value: m.type },
          { label: 'Date & time', value: fmt(`${m.date}T${m.time}`, 'EEE, MMM d, y · h:mm a') },
          { label: 'Venue', value: m.venue },
          ...(description ? [{ label: 'Description', value: description }] : []),
        ],
      },
      {
        title: 'Access & entry',
        step: 1,
        rows: [
          {
            label: 'Guest limit',
            value:
              m.limitGuests && m.maxGuests
                ? `${m.maxGuests.toLocaleString('en-US')} guests`
                : 'No limit',
          },
          { label: 'Check-in methods', value: checkIn },
        ],
      },
      {
        title: 'Invitations',
        step: 2,
        rows: [
          {
            label: 'Invitation type',
            value: `${invitationTitle} · ${guests} guest${guests === 1 ? '' : 's'} per invitation`,
          },
          {
            label: 'RSVP',
            value: !m.requireRsvp
              ? 'Not required'
              : m.setRsvpDeadline && m.rsvpDeadline
                ? `Required by ${fmt(`${m.rsvpDeadline}T00:00`, 'MMM d, y')}`
                : 'Required',
          },
        ],
      },
    ];
  });
}
