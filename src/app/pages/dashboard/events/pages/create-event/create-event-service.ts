import { computed, effect, inject, Service, signal } from '@angular/core';
import { createEventForm } from './components/utils';
import { CreateEventModel, WIZARD_STEPS, emptyEvent, guestsPerInvitation } from './data';

export interface CreatedEvent {
  id: string;
  name: string;
}

// Which fields belong to which step (drives per-step validation)
const STEP_FIELDS: (keyof CreateEventModel)[][] = [
  ['name', 'type', 'description', 'date', 'time', 'venue'],
  ['limitGuests', 'maxGuests', 'checkInQr', 'checkInManual'],
  ['invitationType', 'guestsPerInvitation', 'requireRsvp', 'setRsvpDeadline', 'rsvpDeadline'],
  [],
];

@Service()
export class CreateEventService {
  //   private readonly org = inject(ActiveOrganization);

  readonly steps = WIZARD_STEPS;
  readonly model = signal<CreateEventModel>(emptyEvent());
  readonly form = createEventForm(this.model);

  readonly step = signal(0);
  readonly furthest = signal(0);
  readonly submitting = signal(false);

  readonly coverFile = signal<File | null>(null);
  readonly coverUrl = signal<string | null>(null);

  readonly isLastStep = computed(() => this.step() === this.steps.length - 1);

  constructor() {
    // Object URL for the cover preview, revoked when the file changes or the wizard closes
    effect((onCleanup) => {
      const file = this.coverFile();
      if (!file) {
        this.coverUrl.set(null);
        return;
      }
      const url = URL.createObjectURL(file);
      this.coverUrl.set(url);
      onCleanup(() => URL.revokeObjectURL(url));
    });
  }

  setCover(file: File): void {
    this.coverFile.set(file);
  }

  clearCover(): void {
    this.coverFile.set(null);
  }

  /** Only steps the user has already reached are selectable. */
  goTo(index: number): void {
    if (index <= this.furthest()) this.step.set(index);
  }

  back(): void {
    this.step.update((n) => Math.max(0, n - 1));
  }

  /** Validates the current step; advances only if it's valid. */
  next(): boolean {
    const current = this.step();
    if (!this.isStepValid(current)) {
      this.touchStep(current); // reveal the errors
      return false;
    }
    const nextStep = Math.min(current + 1, this.steps.length - 1);
    this.step.set(nextStep);
    this.furthest.update((f) => Math.max(f, nextStep));
    return true;
  }

  async submit(): Promise<CreatedEvent | null> {
    if (this.submitting()) return null;

    const invalidStep = STEP_FIELDS.findIndex((_, i) => !this.isStepValid(i));
    if (invalidStep !== -1) {
      this.touchStep(invalidStep);
      this.step.set(invalidStep);
      return null;
    }

    this.submitting.set(true);
    try {
      const payload = this.toPayload();
      // TODO: EventsApi.create(payload), then upload this.coverFile() if present.
      // The backend must verify org membership, role and permission to create events.
      console.debug('create event payload', payload);
      await new Promise((resolve) => setTimeout(resolve, 900));
      return { id: crypto.randomUUID(), name: payload.name };
    } finally {
      this.submitting.set(false);
    }
  }

  private isStepValid(index: number): boolean {
    return STEP_FIELDS[index].every((key) => this.form[key]().valid());
  }

  private touchStep(index: number): void {
    STEP_FIELDS[index].forEach((key) => this.form[key]().markAsTouched());
  }

  private toPayload() {
    const m = this.model();
    return {
      //   organizationId: this.org.current().id,
      name: m.name.trim(),
      type: m.type,
      description: m.description.trim() || null,
      startsAt: new Date(`${m.date}T${m.time}`).toISOString(),
      venue: m.venue.trim(),
      guestLimit: m.limitGuests ? m.maxGuests : null,
      checkIn: { qr: m.checkInQr, manual: m.checkInManual },
      invitation: { type: m.invitationType, guestsPerInvitation: guestsPerInvitation(m) },
      rsvp: {
        required: m.requireRsvp,
        deadline: m.requireRsvp && m.setRsvpDeadline ? m.rsvpDeadline : null,
      },
    };
  }
}
