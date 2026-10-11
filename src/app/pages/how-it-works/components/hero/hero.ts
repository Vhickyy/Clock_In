import { Component } from '@angular/core';
import { Text } from '../../../../shared/components/app-ui/text/text';
import { Button } from '../../../../shared/components/app-ui/button/button';

@Component({
  imports: [Text, Button],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {}
