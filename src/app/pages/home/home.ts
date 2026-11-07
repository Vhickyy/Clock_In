import { Component } from '@angular/core';
import { HomeHero } from './components/home-hero/home-hero';

interface StatusItem {
  n: string;
  title: string;
  body: string;
}

@Component({
  imports: [HomeHero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  STEPS: StatusItem[] = [
    {
      n: '01',
      title: 'Create or join an organization',
      body: 'Start a workspace or accept an invitation to one.',
    },
    { n: '02', title: 'Invite your team', body: 'Add members, set roles and permissions.' },
    {
      n: '03',
      title: 'Create an event',
      body: 'Date, location, access settings and guest allowances.',
    },
    { n: '04', title: 'Assign staff', body: 'Choose who works which event.' },
    {
      n: '05',
      title: 'Invite guests',
      body: 'Individuals, couples, groups and plus-ones, each with a QR and manual code.',
    },
    {
      n: '06',
      title: 'Track RSVPs',
      body: 'See who is coming, who declined and who has not replied.',
    },
    {
      n: '07',
      title: 'Check guests in',
      body: 'Scan or enter a code and get an instant result, then review the reports.',
    },
  ];
}
