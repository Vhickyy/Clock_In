import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layout/public-layout/public-layout').then((m) => m.PublicLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.About),
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing').then((m) => m.Pricing),
      },
      {
        path: 'how-it-works',
        loadComponent: () => import('./pages/how-it-works/how-it-works').then((m) => m.HowItWorks),
      },
    ],
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
        children: [
          {
            path: '',
            // pathMatch: 'full',
            loadComponent: () => import('./pages/dashboard/events/events').then((m) => m.Events),
          },
          {
            path: 'new',
            loadComponent: () =>
              import('./pages/dashboard/events/pages/create-event/create-event').then(
                (m) => m.CreateEvent,
              ),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/dashboard/events/pages/event-details/event-details').then(
                (m) => m.EventDetails,
              ),
          },
          {
            path: ':id/guests',
            loadComponent: () =>
              import('./pages/dashboard/events/pages/guests/guests').then((m) => m.Guests),
          },
          {
            path: ':id/guests/add',
            loadComponent: () =>
              import('./pages/dashboard/events/pages/add-guest/add-guest').then((m) => m.AddGuest),
          },
        ],
      },
    ],
  },
];
