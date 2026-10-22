import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'how-it-works',
    loadComponent: () => import('./pages/how-it-works/how-it-works').then((m) => m.HowItWorks),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./shared/layout/dashboard-layout/dashboard-layout').then((m) => m.DashboardLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/dashboard/overview/overview').then((m) => m.Overview),
      },
      {
        path: 'organization',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/dashboard/organization/organization').then((m) => m.Organization),
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./pages/dashboard/organization/pages/create-organization/create-organization').then(
                (m) => m.CreateOrganization,
              ),
          },
        ],
      },
      {
        path: 'events',
        loadComponent: () => import('./pages/dashboard/events/events').then((m) => m.Events),
      },
      {
        path: 'events/new',
        loadComponent: () =>
          import('./pages/dashboard/events/pages/create-event/create-event').then(
            (m) => m.CreateEvent,
          ),
      },
    ],
  },
];
