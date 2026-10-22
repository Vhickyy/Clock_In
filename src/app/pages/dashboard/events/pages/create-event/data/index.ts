import { IconName } from '../../../../../../shared/components/app-ui/icon/icon';

// import { OptionCard } from '../../../shared/components/option-cards-field/option-cards-field';
export interface OptionCard {
  value: string;
  icon: IconName;
  title: string;
  description: string;
}

export type InvitationType = 'individual' | 'couple' | 'family';

export interface CreateEventModel {
  // Step 1
  name: string;
  type: string; // EventCategory, or '' until chosen
  description: string;
  date: string; // yyyy-MM-dd
  time: string; // HH:mm
  venue: string;
  // Step 2
  limitGuests: boolean;
  maxGuests: number | null;
  checkInQr: boolean;
  checkInManual: boolean;
  // Step 3
  invitationType: InvitationType;
  guestsPerInvitation: number; // only used for 'family'
  requireRsvp: boolean;
  setRsvpDeadline: boolean;
  rsvpDeadline: string;
}

export const emptyEvent = (): CreateEventModel => ({
  name: '',
  type: '',
  description: '',
  date: '',
  time: '',
  venue: '',
  limitGuests: false,
  maxGuests: null,
  checkInQr: true,
  checkInManual: true,
  invitationType: 'individual',
  guestsPerInvitation: 4,
  requireRsvp: true,
  setRsvpDeadline: true,
  rsvpDeadline: '',
});

export const guestsPerInvitation = (m: CreateEventModel): number =>
  m.invitationType === 'individual' ? 1 : m.invitationType === 'couple' ? 2 : m.guestsPerInvitation;

export const INVITATION_OPTIONS: OptionCard[] = [
  {
    value: 'individual',
    icon: 'users',
    title: 'Individual',
    description: 'One guest per invitation',
  },
  { value: 'couple', icon: 'usersRound', title: 'Couple', description: 'Two guests per couple' },
  { value: 'family', icon: 'family', title: 'Family', description: 'Multiple guests per family' },
];

export interface WizardStep {
  label: string; // stepper
  heading: string; // card heading
  subtitle: string; // page subtitle
  next: string; // primary button label
}

export const WIZARD_STEPS: WizardStep[] = [
  {
    label: 'Event Details',
    heading: 'Event Details',
    subtitle: 'Set up your event details. You can edit this later.',
    next: 'Next: Access & Rules',
  },
  {
    label: 'Access & Rules',
    heading: 'Access & Entry Rules',
    subtitle: 'Configure how guests can access your event.',
    next: 'Next: Invitations',
  },
  {
    label: 'Invitations',
    heading: 'Invitation Settings',
    subtitle: 'Choose the default invitation type and RSVP rules.',
    next: 'Next: Preview',
  },
  {
    label: 'Preview',
    heading: 'Event Summary',
    subtitle: 'Review your event details before creating.',
    next: 'Create Event',
  },
];
