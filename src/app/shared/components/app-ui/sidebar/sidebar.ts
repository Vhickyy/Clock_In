import { Component, HostListener, Inject, PLATFORM_ID, signal, Type } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Icon, IconName } from '../icon/icon';
import { Text } from '../text/text';

interface NavItem {
  icon: IconName;
  label: string;
  route: string;
  exact: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule, Icon, Text],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.onResize();
  }

  isCollapsed = signal(false);
  sidebarOpen = signal(false);

  isMobile = signal(false);

  toggleCollapse() {
    this.isCollapsed.update((v) => !v);
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(window.innerWidth < 768);

    if (!this.isMobile()) {
      this.sidebarOpen.set(false);
    }
  }

  navItems = signal<NavItem[]>([
    { label: 'Organization', route: '/dashboard/organization', icon: 'building', exact: false },
    { label: 'Dashboard', route: '/dashboard', icon: 'home', exact: true },
    { label: 'Events', route: '/dashboard/events', icon: 'calendar', exact: false },
    { label: 'Invitations', route: '/dashboard/invitations', icon: 'fileText', exact: true },
    { label: 'Guests', route: '/dashboard/guests', icon: 'usersRound', exact: true },
    { label: 'Reports', route: '/dashboard/reports', icon: 'chartCol', exact: true },
    { label: 'Staff & Permissions', route: '/dashboard/staff', icon: 'userCog', exact: true },
    { label: 'Settings', route: '/dashboard/settings', icon: 'settings', exact: true },
  ]);
}
