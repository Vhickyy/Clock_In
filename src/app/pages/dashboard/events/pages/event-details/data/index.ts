import { IEventOverviewData } from '../types';

export const eventOverviewData: IEventOverviewData = {
  tabs: [
    { label: 'Overview', value: 'overview' },
    { label: 'Guests', value: 'guests' },
    { label: 'Staff', value: 'staff' },
    { label: 'Invitations', value: 'invitations' },
    { label: 'Check-in', value: 'check-in' },
    { label: 'Messages', value: 'messages' },
    { label: 'Reports', value: 'reports' },
    { label: 'Activity', value: 'activity' },
  ],

  quickActions: [
    {
      title: 'View Guest Directory',
      description: 'Manage and check guest list',
      icon: 'users',
      bgStyle: 'bg-blue-50',
      action: 'guests',
      iconStyle: 'text-blue-900!',
    },
    {
      title: 'Create Invitations',
      description: 'Send invites to your guests',
      icon: 'send',
      bgStyle: 'bg-purple-50',
      action: 'invitations',
      iconStyle: 'text-purple-900!',
    },
    {
      title: 'Manage Staff',
      description: 'View and assign staff members',
      icon: 'usersRound',
      bgStyle: 'bg-green-50',
      action: 'staff',
      iconStyle: 'text-green-900!',
    },
    {
      title: 'Event Check-in',
      description: 'Start check-in process',
      icon: 'qrCode',
      bgStyle: 'bg-orange-50',
      action: 'check-in',
      iconStyle: 'text-orange-900!',
    },
  ],

  support: {
    title: 'Need Help?',
    description: 'If you need assistance managing your event, our support team is here to help.',
    action: 'Contact Support',
  },
};
