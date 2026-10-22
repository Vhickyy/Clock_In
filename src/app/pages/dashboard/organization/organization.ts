import { Component, inject } from '@angular/core';
import { DashHeader } from '../components/dash-header/dash-header';
import { Text } from '../../../shared/components/app-ui/text/text';
import { Button } from '../../../shared/components/app-ui/button/button';
import { Icon } from '../../../shared/components/app-ui/icon/icon';
import { Router } from '@angular/router';

@Component({
  imports: [DashHeader, Text, Button, Icon],
  selector: 'app-organization',
  styleUrl: './organization.css',
  templateUrl: './organization.html',
})
export class Organization {
  router = inject(Router);
}
