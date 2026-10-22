import { WritableSignal } from '@angular/core';
import { disabled, form, maxLength, required, validate } from '@angular/forms/signals';
import { CreateEventModel } from '../data';
import { TYPE_OPTIONS } from '../../../data';

const err = (kind: string, message: string) => ({ kind, message });
const today = () => new Date().toLocaleDateString('en-CA'); // yyyy-MM-dd in local time
const isBlank = (v: unknown) => v === null || v === undefined || Number.isNaN(v);

export function createEventForm(model: WritableSignal<CreateEventModel>) {
  return form(model, (p) => {
    // ── Step 1
    required(p.name, { message: 'Give your event a name' });
    maxLength(p.name, 120, { message: 'Keep the name under 120 characters' });
    required(p.type, { message: 'Choose an event type' });
    maxLength(p.description, 500, { message: 'Keep the description under 500 characters' });
    required(p.date, { message: 'Pick the event date' });
    validate(p.date, ({ value }) =>
      value() && value() < today()
        ? err('past-date', 'The event date can’t be in the past')
        : undefined,
    );
    required(p.time, { message: 'Set a start time' });
    required(p.venue, { message: 'Add the venue' });

    // ── Step 2
    disabled(p.maxGuests, ({ valueOf }) => !valueOf(p.limitGuests));
    validate(p.maxGuests, ({ value }) => {
      const v = value();
      return isBlank(v) || !Number.isInteger(v) || (v as number) < 1
        ? err('max-guests', 'Enter a whole number of 1 or more')
        : undefined;
    });
    validate(p.checkInManual, ({ valueOf }) =>
      !valueOf(p.checkInQr) && !valueOf(p.checkInManual)
        ? err('check-in-method', 'Enable at least one check-in method')
        : undefined,
    );

    // ── Step 3
    disabled(p.guestsPerInvitation, ({ valueOf }) => valueOf(p.invitationType) !== 'family');
    validate(p.guestsPerInvitation, ({ value }) => {
      const v = value();
      return isBlank(v) || !Number.isInteger(v) || v < 2 || v > 20
        ? err('family-size', 'Enter a whole number from 2 to 20')
        : undefined;
    });

    disabled(
      p.rsvpDeadline,
      ({ valueOf }) => !valueOf(p.requireRsvp) || !valueOf(p.setRsvpDeadline),
    );
    required(p.rsvpDeadline, { message: 'Pick an RSVP deadline' });
    validate(p.rsvpDeadline, ({ value, valueOf }) => {
      const deadline = value();
      const eventDate = valueOf(p.date);
      if (!deadline) return undefined;
      if (deadline < today()) return err('past-deadline', 'The deadline can’t be in the past');
      if (eventDate && deadline > eventDate)
        return err('late-deadline', 'The deadline must be on or before the event date');
      return undefined;
    });
  });
}

export const EVENT_TYPE_OPTIONS = TYPE_OPTIONS.filter((o) => o.value !== 'all');
