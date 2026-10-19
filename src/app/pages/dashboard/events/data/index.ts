import { ColumnDef } from '@tanstack/angular-table';
import { StatItem } from '../../overview/types';
import { EventCategory, EventRow, EventStatus } from '../types';
import { SelectOption } from '../../../../shared/components/app-ui/app_types/text_types';

export const STATUS_TONE: Record<EventStatus, string> = {
  Upcoming: 'green',
  Ongoing: 'blue',
  Completed: 'neutral',
};

export const CATEGORY_TONE: Record<EventCategory, string> = {
  // export const CATEGORY_TONE: Record<EventCategory, Tone> = {
  Wedding: 'coral',
  Birthday: 'purple',
  Corporate: 'blue',
  Engagement: 'green',
  Conference: 'purple',
  Charity: 'rose',
  Anniversary: 'amber',
};

export const STATUS_OPTIONS: SelectOption[] = [
  { value: 'all', label: 'All Statuses' },
  { value: 'Upcoming', label: 'Upcoming' },
  { value: 'Ongoing', label: 'Ongoing' },
  { value: 'Completed', label: 'Completed' },
];

export const TYPE_OPTIONS: SelectOption[] = [
  { value: 'all', label: 'All Event Types' },
  { value: 'Wedding', label: 'Wedding' },
  { value: 'Birthday', label: 'Birthday' },
  { value: 'Corporate', label: 'Corporate' },
  { value: 'Engagement', label: 'Engagement' },
  { value: 'Conference', label: 'Conference' },
  { value: 'Charity', label: 'Charity' },
  { value: 'Anniversary', label: 'Anniversary' },
];

export interface DateRangeOption extends SelectOption {
  from?: string;
  to?: string;
}

export const DATE_RANGE_OPTIONS: DateRangeOption[] = [
  { value: 'all', label: 'All dates' },
  {
    value: 'may-jun-2025',
    label: 'May 2025 – Jun 2025',
    from: '2025-05-01T00:00:00',
    to: '2025-06-30T23:59:59',
  },
  {
    value: 'feb-apr-2025',
    label: 'Feb 2025 – Apr 2025',
    from: '2025-02-01T00:00:00',
    to: '2025-04-30T23:59:59',
  },
];

// Column ids are the keys used in `cellTemplates`
export const EVENT_COLUMNS: ColumnDef<EventRow>[] = [
  { id: 'event', accessorKey: 'name', header: 'Event' },
  { id: 'date', accessorKey: 'startsAt', header: 'Date & Time' },
  { accessorKey: 'venue', header: 'Venue' },
  { accessorKey: 'invitations', header: 'Invitations' },
  { accessorKey: 'rsvps', header: 'RSVPs' },
  { accessorKey: 'checkedIn', header: 'Checked In' },
  { accessorKey: 'status', header: 'Status' },
  { id: 'actions', header: 'Actions' },
];

export const EVENT_STATS: StatItem[] = [
  {
    id: 'total',
    icon: 'calendar',
    // tone: 'coral',
    label: 'Total Events',
    value: 8,
    trend: '2 from last month',
  },
  {
    id: 'upcoming',
    icon: 'calendarPlus',
    // tone: 'blue',
    label: 'Upcoming Events',
    value: 5,
    trend: '1 from last month',
  },
  {
    id: 'invites',
    icon: 'usersRound',
    // tone: 'green',
    label: 'Total Invitations',
    value: 1248,
    trend: '56 from last month',
  },
  {
    id: 'checked',
    icon: 'checkCircle',
    // tone: 'purple',
    label: 'Checked In',
    value: 176,
    trend: '38 from last month',
  },
];

export const EVENTS: EventRow[] = [
  {
    id: '1',
    name: 'Sarah & John’s Wedding',
    category: 'Wedding',
    image: 'images/event-wedding.jpg',
    startsAt: '2025-06-14T16:00:00',
    venue: 'The Grand Hall, Lagos',
    invitations: 450,
    rsvps: 378,
    checkedIn: 312,
    status: 'Upcoming',
  },
  {
    id: '2',
    name: 'Bolanle’s Birthday Dinner',
    category: 'Birthday',
    image: 'images/event-dinner.jpg',
    startsAt: '2025-06-10T18:00:00',
    venue: 'The View Lounge, Abuja',
    invitations: 120,
    rsvps: 98,
    checkedIn: 68,
    status: 'Upcoming',
  },
  {
    id: '3',
    name: 'Company Gala Night',
    category: 'Corporate',
    image: 'images/event-gala.jpg',
    startsAt: '2025-02-22T18:00:00',
    venue: 'Eko Hotel, Lagos',
    invitations: 300,
    rsvps: 245,
    checkedIn: 198,
    status: 'Ongoing',
  },
  {
    id: '4',
    name: 'Tunde & Aisha’s Engagement',
    category: 'Engagement',
    image: 'images/event-engagement.jpg',
    startsAt: '2025-03-15T13:00:00',
    venue: 'The Garden Villa, Abuja',
    invitations: 200,
    rsvps: 167,
    checkedIn: 142,
    status: 'Ongoing',
  },
  {
    id: '5',
    name: 'Tech Summit 2025',
    category: 'Conference',
    image: 'images/event-conference.jpg',
    startsAt: '2025-04-24T09:00:00',
    venue: 'Landmark Centre, Lagos',
    invitations: 500,
    rsvps: 432,
    checkedIn: 388,
    status: 'Completed',
  },
  {
    id: '6',
    name: 'Charity Fundraiser',
    category: 'Charity',
    image: 'images/event-charity.jpg',
    startsAt: '2025-05-17T17:00:00',
    venue: 'The Civic Centre, Abuja',
    invitations: 150,
    rsvps: 112,
    checkedIn: 95,
    status: 'Completed',
  },
  {
    id: '7',
    name: 'Chidi & Ngozi’s Anniversary',
    category: 'Anniversary',
    image: 'images/event-dinner.jpg',
    startsAt: '2025-07-19T17:00:00',
    venue: 'The Garden Villa, Abuja',
    invitations: 180,
    rsvps: 150,
    checkedIn: 0,
    status: 'Upcoming',
  },
  {
    id: '8',
    name: 'Product Launch Mixer',
    category: 'Corporate',
    image: 'images/event-gala.jpg',
    startsAt: '2025-08-02T18:30:00',
    venue: 'Eko Hotel, Lagos',
    invitations: 250,
    rsvps: 190,
    checkedIn: 0,
    status: 'Upcoming',
  },
];
