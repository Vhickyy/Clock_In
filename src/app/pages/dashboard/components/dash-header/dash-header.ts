import { Component, input } from '@angular/core';
import { Text } from '../../../../shared/components/app-ui/text/text';

@Component({
  imports: [Text],
  selector: 'app-dash-header',
  styleUrl: './dash-header.css',
  templateUrl: './dash-header.html',
})
export class DashHeader {
  text = input.required<string>();
  subText = input.required<string>();
}
