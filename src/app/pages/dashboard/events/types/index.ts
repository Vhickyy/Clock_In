import { IconName } from '../../../../shared/components/app-ui/icon/icon';

export type EventStatus = 'Upcoming' | 'Ongoing' | 'Completed';
export type EventCategory =
  'Wedding' | 'Birthday' | 'Corporate' | 'Engagement' | 'Conference' | 'Charity' | 'Anniversary';

export interface EventRow {
  id: string;
  name: string;
  category: EventCategory;
  image: string;
  startsAt: string; // ISO date-time
  venue: string;
  invitations: number;
  rsvps: number;
  checkedIn: number; // percentages are derived in the UI, not stored
  status: EventStatus;
  guests: number;
}

export type RowAction = 'view' | 'edit' | 'duplicate' | 'delete';

export interface MenuEntry {
  id: RowAction;
  label: string;
  icon: IconName;
  danger?: boolean;
}

export interface SummaryGroup {
  title: string;
  step: number; // which step the Edit link jumps to
  rows: { label: string; value: string }[];
}
