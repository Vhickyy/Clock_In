import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';
import { RouterLink } from '@angular/router';
import { Crumb } from '../app_types/text_types';

@Component({
  imports: [Icon, RouterLink],
  selector: 'app-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './breadcrumb.css',
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  items = input.required<Crumb[]>();
}
