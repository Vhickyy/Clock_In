import { Component } from '@angular/core';
import { Button } from '../../../../shared/components/app-ui/button/button';
import { Text } from '../../../../shared/components/app-ui/text/text';
import { Icon } from '../../../../shared/components/app-ui/icon/icon';

@Component({
  imports: [Button, Text, Icon],
  selector: 'app-home-hero',
  styleUrl: './home-hero.css',
  templateUrl: './home-hero.html',
})
export class HomeHero {
  features = [
    {
      title: 'Secure Access',
      description: 'Only invited guests can enter using QR codes or unique access codes.',
    },
    {
      title: 'Flexible Invitations',
      description: "Invite individuals, couples, or groups — it's up to you.",
    },
    {
      title: 'Real-Time Check-In',
      description: "Track attendance and see who's arrived, instantly.",
    },
    {
      title: 'Easy for Your Guests',
      description: 'A simple, beautiful experience from invitation to check-in.',
    },
  ];

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
