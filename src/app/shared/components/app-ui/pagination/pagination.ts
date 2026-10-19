import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Text } from '../text/text';
import { Icon } from '../icon/icon';

@Component({
  imports: [Text, Icon],
  selector: 'app-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './pagination.css',
  templateUrl: './pagination.html',
})
export class Pagination {
  pageIndex = input.required<number>(); // 0-based, like TanStack
  pageCount = input.required<number>();
  pageSize = input.required<number>();
  total = input.required<number>();
  itemLabel = input('items');
  pageChange = output<number>();

  protected readonly base =
    'grid size-9 place-items-center rounded-lg border text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40';
  protected readonly idle = 'border-border bg-surface text-text hover:bg-background';
  protected readonly active = 'border-champagne bg-champagne text-white';

  protected pages = computed(() => Array.from({ length: this.pageCount() }, (_, i) => i));

  protected summary = computed(() => {
    const total = this.total();
    if (!total) return `No ${this.itemLabel()}`;
    const start = this.pageIndex() * this.pageSize() + 1;
    const end = Math.min(total, start + this.pageSize() - 1);
    return `Showing ${start} - ${end} of ${total} ${this.itemLabel()}`;
  });
}
