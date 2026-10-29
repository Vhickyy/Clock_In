import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { Field } from '../../../../../shared/components/app-ui/field/field';
import { Input } from '../../../../../shared/directives/input/input';
import { Button } from '../../../../../shared/components/app-ui/button/button';

@Component({
  imports: [DashHeader, Text, Field, Button],
  selector: 'app-create-organization',
  styleUrl: './create-organization.css',
  templateUrl: './create-organization.html',
  hostDirectives: [Input],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateOrganization {}
