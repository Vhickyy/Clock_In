import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { RsvpSegment } from '../../types';
import { BaseChartDirective } from 'ng2-charts';
import type { ChartConfiguration } from 'chart.js';
import { SectionCard } from '../../../../../shared/components/dash_ui/section-card/section-card';

export const cssVar = (name: string, fallback: string): string => {
  if (typeof document === 'undefined') return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
};

const COLORS: Record<RsvpSegment['tone'], string> = {
  green: cssVar('--color-green', '#287a58'),
  amber: cssVar('--color-amber', '#f5a623'),
  rose: cssVar('--color-rose', '#e14f4f'),
};
const DOT: Record<RsvpSegment['tone'], string> = {
  green: 'bg-green',
  amber: 'bg-amber',
  rose: 'bg-rose',
};

@Component({
  imports: [Text, SectionCard],
  selector: 'app-rsvp-donut',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './rsvp-donut.css',
  templateUrl: './rsvp-donut.html',
})
export class RsvpDonut {
  data = input.required<RsvpSegment[]>();

  protected total = computed(() => this.data().reduce((sum, s) => sum + s.value, 0));

  protected legend = computed(() => {
    const total = this.total() || 1;
    return this.data().map((s) => ({
      ...s,
      percent: ((s.value / total) * 100).toFixed(1),
      dotClass: DOT[s.tone],
    }));
  });

  protected chartData = computed<ChartConfiguration<'doughnut'>['data']>(() => ({
    labels: this.data().map((s) => s.label),
    datasets: [
      {
        data: this.data().map((s) => s.value),
        backgroundColor: this.data().map((s) => COLORS[s.tone]),
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  }));

  protected readonly options: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '72%', // ring thickness
    plugins: { legend: { display: false } },
  };
}
