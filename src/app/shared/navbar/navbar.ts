import { Component } from '@angular/core';
import { Text } from '../components/app-ui/text/text';
import { Button } from '../components/app-ui/button/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../components/app-ui/icon/icon';

export interface NavLink {
  label: string;
  route: string;
  exact?: boolean;
}

@Component({
  imports: [Text, Button, RouterLink, RouterLinkActive, Icon],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  navLinks: NavLink[] = [
    { label: 'Home', route: '/', exact: true },
    { label: 'About', route: '/about' },
    { label: 'Features', route: '/features' },
    // { label: 'How It Works', route: '/how-it-works' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'Contact', route: '/contact' },
    // { label: 'Organizations', route: '/organizations' },
  ];
}
