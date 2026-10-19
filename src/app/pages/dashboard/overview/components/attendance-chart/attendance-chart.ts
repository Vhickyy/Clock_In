import { Component, computed, input } from '@angular/core';
import { SectionCard } from '../../../../../shared/components/dash_ui/section-card/section-card';
import { Text } from '../../../../../shared/components/app-ui/text/text';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';
import { ChartConfiguration } from 'chart.js';
import { ChartPoint } from '../../types';

@Component({
  imports: [SectionCard, Text, Icon],
  selector: 'app-attendance-chart',
  styleUrl: './attendance-chart.css',
  templateUrl: './attendance-chart.html',
})
export class AttendanceChart {
  data = input.required<ChartPoint[]>();
  range = input('Last 30 days');

  // New object whenever `data` changes, so ng2-charts re-renders (works well with OnPush)
  protected chartData = computed<ChartConfiguration<'line'>['data']>(() => ({
    labels: this.data().map((d) => d.label),
    datasets: [
      {
        label: 'RSVPs',
        data: this.data().map((d) => d.rsvps),
        // borderColor: CORAL,
        // backgroundColor: areaGradient,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
      {
        label: 'Checked In',
        data: this.data().map((d) => d.checkedIn),
        // borderColor: NAVY,
        fill: false,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  }));

  protected readonly options: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false }, // we render our own legend above
      // tooltip: { backgroundColor: NAVY, padding: 10, cornerRadius: 8 },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        // ticks: { color: MUTED, font: { size: 10 }, maxTicksLimit: 10 },
      },
      y: {
        min: 0,
        max: 200,
        border: { display: false, dash: [3, 4] },
        // grid: { color: BORDER },
        // ticks: { color: MUTED, font: { size: 10 }, stepSize: 50 },
      },
    },
  };
}
