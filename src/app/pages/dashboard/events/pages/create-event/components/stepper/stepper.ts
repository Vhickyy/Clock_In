import { Component, computed, input, output } from '@angular/core';
import { Icon } from '../../../../../../../shared/components/app-ui/icon/icon';
import { Button } from '../../../../../../../shared/components/app-ui/button/button';

export interface StepperItem {
  label: string;
}

type StepState = 'done' | 'current' | 'todo';

const CIRCLE: Record<StepState, string> = {
  done: 'border-champagne bg-champagne text-primary hover:brightness-95',
  current: 'border-champagne-dark bg-champagne text-primary ring-4 ring-champagne/30',
  todo: 'border-border bg-surface text-muted',
};
@Component({
  imports: [Icon, Button],
  selector: 'app-stepper',
  styleUrl: './stepper.css',
  templateUrl: './stepper.html',
})
export class Stepper {
  steps = input.required<readonly StepperItem[]>();
  current = input.required<number>();
  furthest = input.required<number>(); // highest step the user has reached
  stepSelected = output<number>();

  protected readonly circle = CIRCLE;
  protected states = computed<StepState[]>(() =>
    this.steps().map((_, i) =>
      i < this.current() ? 'done' : i === this.current() ? 'current' : 'todo',
    ),
  );
}
