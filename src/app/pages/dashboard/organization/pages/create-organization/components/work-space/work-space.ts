import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { Button } from '../../../../../../../shared/components/app-ui/button/button';
import { DashHeader } from '../../../../../components/dash-header/dash-header';
import { Text } from '../../../../../../../shared/components/app-ui/text/text';

@Component({
  imports: [DashHeader, Text, Button],
  selector: 'app-work-space',
  styleUrl: './work-space.css',
  templateUrl: './work-space.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkSpace {
  step = model.required();
}
