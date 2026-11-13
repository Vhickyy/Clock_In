import { Component } from '@angular/core';
import { Text } from '../../shared/components/app-ui/text/text';
import { Icon, IconName } from '../../shared/components/app-ui/icon/icon';
import { Button } from '../../shared/components/app-ui/button/button';

@Component({
  imports: [Text, Icon, Button],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  whatDrivesUs: { id: number; title: string; description: string; icon: IconName }[] = [
    {
      id: 1,
      title: 'Security',
      description: 'We prioritise the safety and privacy of your event and your guests.',
      icon: 'verified',
    },
    {
      id: 2,
      title: 'Simplicity',
      description: 'We make event access and guest management effortless.',
      icon: 'family',
    },
    {
      id: 3,
      title: 'Excellence',
      description: 'We’re committed to delivering a high-quality experience, always.',
      icon: 'gem',
    },
    {
      id: 4,
      title: 'Trust',
      description: 'You can count on us to do what we say, when we say it.',
      icon: 'heart',
    },
    // {
    //   id: 5,
    //   title: 'Innovation',
    //   description: 'We’re always improving to make your events smarter and smoother.',
    //   icon: 'sparkles',
    // },
  ];
}
