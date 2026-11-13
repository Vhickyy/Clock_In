import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { Button } from '../../../../../../../shared/components/app-ui/button/button';
import { Field } from '../../../../../../../shared/components/app-ui/field/field';
import { DashHeader } from '../../../../../components/dash-header/dash-header';
import { Text } from '../../../../../../../shared/components/app-ui/text/text';

@Component({
  imports: [DashHeader, Text, Field, Button],
  selector: 'app-basic',
  styleUrl: './basic.css',
  templateUrl: './basic.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // hostDirectives: [Input],
})
export class Basic {
  step = model.required<number>();
}
