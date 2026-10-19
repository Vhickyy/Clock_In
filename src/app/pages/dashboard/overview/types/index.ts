import { IconName } from '../../../../shared/components/app-ui/icon/icon';

export interface StatItem {
  id: string;
  icon: IconName;
  //   tone: Tone;
  label: string;
  value: number;
  trend: string;
}

export interface ChartPoint {
  label: string;
  rsvps: number;
  checkedIn: number;
}

export interface RsvpSegment {
  label: string;
  value: number;
  tone: 'green' | 'amber' | 'rose';
}

export interface ActivityItem {
  id: string;
  icon: IconName;
  //   tone: Tone;
  title: string;
  description: string;
  time: string;
}

export interface QuickAction {
  id: string;
  icon: IconName;
  //   tone: Tone;
  title: string;
  description: string;
}

export interface UpcomingEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  image: string;
  status: 'Active' | 'Upcoming' | 'Draft';
}
