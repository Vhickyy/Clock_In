import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { Button } from '../../../../shared/components/app-ui/button/button';
import { Text } from '../../../../shared/components/app-ui/text/text';
import { Icon, IconName } from '../../../../shared/components/app-ui/icon/icon';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  imports: [Button, Text, Icon],
  selector: 'app-home-hero',
  styleUrl: './home-hero.css',
  templateUrl: './home-hero.html',
})
export class HomeHero {
  private destroyRef = inject(DestroyRef);
  private platformId = inject(PLATFORM_ID);
  heroContent = viewChild.required<ElementRef<HTMLElement>>('heroContent');

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const element = this.heroContent()?.nativeElement;

      if (!element) return;

      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: {
            duration: 0.8,
            ease: 'power3.out',
          },
        });

        timeline
          .from('[data-animate="eyebrow"]', {
            opacity: 0,
            y: 20,
          })
          .from(
            '[data-animate="heading"]',
            {
              opacity: 0,
              y: 40,
            },
            '-=0.4',
          )
          .from(
            '[data-animate="description"]',
            {
              opacity: 0,
              y: 25,
            },
            '-=0.35',
          )
          .from(
            '[data-animate="buttons"] > *',
            {
              opacity: 0,
              y: 20,
              stagger: 0.15,
            },
            '-=0.3',
          );
      }, element);

      this.destroyRef.onDestroy(() => ctx.revert());
    });
  }
  features: { icon: IconName; title: string; description: string }[] = [
    {
      icon: 'verified',
      title: 'Gatecrasher protection',
      description:
        'Every QR code belongs to one invitation. Revoked or reused codes are refused at the door, instantly.',
    },
    {
      icon: 'wifiOff',
      title: 'Works with no internet',
      description:
        'Staff phones keep scanning when venue signal drops, then sync as soon as it returns.',
    },
    {
      icon: 'users',
      title: 'Invitations that fit real life',
      description: 'Individuals, couples, families and +1s, sent by WhatsApp, SMS or email.',
    },
    {
      icon: 'phone',
      title: 'Easy for your guests',
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
      img: 'create.png',
    },
    {
      step: '02',
      title: 'Invite Your Guests',
      description:
        'Share personalized invitations with your guests and give them secure access to your event.',
      img: 'invite.png',
    },
    {
      step: '03',
      title: 'Check In with Ease',
      description:
        'Scan QR codes or verify access codes at the entrance and track attendance in real time.',
      img: 'check_in.png',
    },
  ];

  eventOccasions: { id: number; title: string; description: string; icon: IconName }[] = [
    {
      id: 1,
      title: 'Weddings',
      description: 'Make every moment special with seamless guest invitations and check-ins.',
      icon: 'heart',
    },
    {
      id: 2,
      title: 'Birthdays',
      description: 'Celebrate with the right people and make guest access effortless.',
      icon: 'cake',
    },
    {
      id: 3,
      title: 'Corporate Events',
      description: 'Manage attendees, streamline entry, and keep your event organized.',
      icon: 'briefcaseBusiness',
    },
    {
      id: 4,
      title: 'Conferences',
      description: 'Simplify attendee registration and keep check-in moving smoothly.',
      icon: 'presentation',
    },
    {
      id: 5,
      title: 'Private Parties',
      description: 'Create exclusive experiences with controlled access for your guests.',
      icon: 'partyPopper',
    },
    {
      id: 6,
      title: 'Social Gatherings',
      description: 'Bring people together and make welcoming your guests easier.',
      icon: 'users',
    },
  ];
}
