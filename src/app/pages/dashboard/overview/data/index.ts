import {
  StatItem,
  ChartPoint,
  RsvpSegment,
  ActivityItem,
  QuickAction,
  UpcomingEvent,
} from '../types';

export const STATS: StatItem[] = [
  {
    id: 'events',
    icon: 'calendar',
    // tone: 'coral',
    label: 'Total Events',
    value: 5,
    trend: '2 from last month',
  },
  {
    id: 'invites',
    icon: 'mail',
    // tone: 'blue',
    label: 'Invitations Issued',
    value: 248,
    trend: '56 from last month',
  },
  {
    id: 'rsvps',
    icon: 'usersRound',
    // tone: 'green',
    label: 'RSVPs Received',
    value: 198,
    trend: '43 from last month',
  },
  {
    id: 'checkins',
    icon: 'checkCircle',
    // tone: 'purple',
    label: 'Checked In',
    value: 176,
    trend: '38 from last month',
  },
];

export const CHART_POINTS: ChartPoint[] = [
  { label: 'May 10', rsvps: 35, checkedIn: 22 },
  { label: 'May 13', rsvps: 40, checkedIn: 30 },
  { label: 'May 16', rsvps: 62, checkedIn: 48 },
  { label: 'May 19', rsvps: 70, checkedIn: 55 },
  { label: 'May 22', rsvps: 85, checkedIn: 68 },
  { label: 'May 25', rsvps: 95, checkedIn: 78 },
  { label: 'May 28', rsvps: 112, checkedIn: 92 },
  { label: 'May 31', rsvps: 128, checkedIn: 100 },
  { label: 'Jun 3', rsvps: 140, checkedIn: 108 },
  { label: 'Jun 6', rsvps: 168, checkedIn: 122 },
  { label: 'Jun 9', rsvps: 198, checkedIn: 144 },
];

export const RSVP_SEGMENTS: RsvpSegment[] = [
  { label: 'Confirmed', value: 168, tone: 'green' },
  { label: 'Pending', value: 18, tone: 'amber' },
  { label: 'Declined', value: 12, tone: 'rose' },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: '1',
    icon: 'checkCircle',
    // tone: 'green',
    title: 'New RSVP received',
    description: 'Chinedu Okafor confirmed attendance for Sarah & John’s Wedding',
    time: '2 minutes ago',
  },
  {
    id: '2',
    icon: 'send',
    // tone: 'blue',
    title: 'Invitation sent',
    description: 'Family group invitation sent to 4 guests for Sarah & John’s Wedding',
    time: '15 minutes ago',
  },
  {
    id: '3',
    icon: 'userCheck',
    // tone: 'green',
    title: 'Guest checked in',
    description: 'Amaka Johnson checked in at The Grand Hall, Lagos',
    time: '32 minutes ago',
  },
  {
    id: '4',
    icon: 'calendar',
    // tone: 'coral',
    title: 'New event created',
    description: 'Bolanle’s Birthday Dinner was created',
    time: '1 hour ago',
  },
  {
    id: '5',
    icon: 'ban',
    // tone: 'rose',
    title: 'Invitation revoked',
    description: 'Invitation for Tolu Adeyemi was revoked by you',
    time: '2 hours ago',
  },
];

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'create-event',
    icon: 'calendarPlus',
    // tone: 'coral',
    title: 'Create New Event',
    description: 'Set up an event and manage your details',
  },
  {
    id: 'manage-invitations',
    icon: 'usersRound',
    // tone: 'green',
    title: 'Manage Invitations',
    description: 'Create, edit or revoke invitations',
  },
  {
    id: 'guest-list',
    icon: 'users',
    // tone: 'purple',
    title: 'View Guest List',
    description: 'Check RSVPs and guest details',
  },
  {
    id: 'reports',
    icon: 'fileText',
    // tone: 'blue',
    title: 'View Reports',
    description: 'See attendance, RSVPs and check-in data',
  },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: '1',
    name: 'Sarah & John’s Wedding',
    date: 'Dec 14, 2024 · 4:00 PM',
    location: 'The Grand Hall, Lagos',
    image: 'assets/images/event-wedding.jpg',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Bolanle’s Birthday Dinner',
    date: 'Jan 10, 2025 · 6:00 PM',
    location: 'The View Lounge, Abuja',
    image: 'assets/images/event-dinner.jpg',
    status: 'Upcoming',
  },
  {
    id: '3',
    name: 'Company Gala Night',
    date: 'Feb 22, 2025 · 5:00 PM',
    location: 'Eko Hotel, Lagos',
    image: 'assets/images/event-gala.jpg',
    status: 'Upcoming',
  },
  {
    id: '4',
    name: 'Tunde & Aisha’s Engagement',
    date: 'Mar 15, 2025 · 3:00 PM',
    location: 'The Garden Villa, Abuja',
    image: 'assets/images/event-engagement.jpg',
    status: 'Draft',
  },
];
