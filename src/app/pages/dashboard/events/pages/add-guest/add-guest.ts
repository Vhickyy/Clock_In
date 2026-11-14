import { Component } from '@angular/core';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { Input } from '../../../../../shared/components/app-ui/input/input';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Icon, Text, Input, RouterLink],
  selector: 'app-add-guest',
  styleUrl: './add-guest.css',
  templateUrl: './add-guest.html',
})
export class AddGuest {}
