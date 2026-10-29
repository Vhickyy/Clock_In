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
      description:
        'Every QR code belongs to one invitation. Revoked or reused codes are refused at the door, instantly.',
    },
    {
      title: 'Flexible Invitations',
      description:
        'Staff phones keep scanning when venue signal drops, then sync as soon as it returns.',
    },
    {
      title: 'Real-Time Check-In',
      description: 'Individuals, couples, families and +1s, sent by WhatsApp, SMS or email.',
    },
    {
      title: 'Easy for Your Guests',
      description:
        'Guests open their invitation link and show the code. There is nothing to download.',
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
