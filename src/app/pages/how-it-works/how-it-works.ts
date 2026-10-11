import { Component } from '@angular/core';
import { Text } from '../../shared/components/app-ui/text/text';
import { Hero } from './components/hero/hero';
import { Process } from './components/process/process';
import { Button } from '../../shared/components/app-ui/button/button';

@Component({
  imports: [Text, Hero, Process, Button],
  selector: 'app-how-it-works',
  styleUrl: './how-it-works.css',
  templateUrl: './how-it-works.html',
})
export class HowItWorks {
  howItWorks = [
    {
      step: '01',
      title: 'Create Your Event',
      description:
        'Set up your event, customize your invitations, and generate unique access codes for your guests.',
    },
    {
      step: '02',
      title: 'Invite Your Guests',
      description:
        'Share personalized invitations with your guests and give them secure access to your event.',
    },
    {
      step: '03',
      title: 'Check In with Ease',
      description:
        'Scan QR codes or verify access codes at the entrance and track attendance in real time.',
    },
  ];
}
