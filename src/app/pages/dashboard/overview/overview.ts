import { Component, computed, input } from '@angular/core';
import { ActivityList } from './components/activity-list/activity-list';
import { QuickActions } from './components/quick-actions/quick-actions';
import { UpcomingEvents } from './components/upcoming-events/upcoming-events';
import { SupportCard } from './components/support-card/support-card';
import { StatCard } from '../../../shared/components/dash_ui/stat-card/stat-card';
import {
  STATS,
  CHART_POINTS,
  RSVP_SEGMENTS,
  ACTIVITIES,
  QUICK_ACTIONS,
  UPCOMING_EVENTS,
} from './data';
import { SectionCard } from '../../../shared/components/dash_ui/section-card/section-card';
import { Text } from '../../../shared/components/app-ui/text/text';
import { Icon } from '../../../shared/components/app-ui/icon/icon';

@Component({
  imports: [
    ActivityList,
    QuickActions,
    UpcomingEvents,
    SupportCard,
    StatCard,
    SectionCard,
    Text,
    Icon,
  ],
  selector: 'app-overview',
  styleUrl: './overview.css',
  templateUrl: './overview.html',
})
export class Overview {
  protected readonly stats = STATS;
  protected readonly chartPoints = CHART_POINTS;
  protected readonly rsvpSegments = RSVP_SEGMENTS;
  protected readonly activities = ACTIVITIES;
  protected readonly quickActions = QUICK_ACTIONS;
  protected readonly upcomingEvents = UPCOMING_EVENTS;

  protected onQuickAction(id: string): void {
    // TODO: route / open dialog based on id
    console.log('quick action:', id);
  }
}
