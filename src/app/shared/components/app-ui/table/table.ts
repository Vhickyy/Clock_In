import { ChangeDetectionStrategy, Component, TemplateRef, input } from '@angular/core';
import {
  ColumnDef,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/angular-table';
import { NgTemplateOutlet } from '@angular/common';
import { Pagination } from '../pagination/pagination';
// import { ICONS } from '../shared/icons';

@Component({
  selector: 'app-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FlexRenderDirective, NgTemplateOutlet, Pagination],
  templateUrl: './table.html',
})
export class Table<T> {
  data = input.required<T[]>();
  columns = input.required<ColumnDef<T>[]>();
  globalFilter = input<string>('');
  pageSize = input<number>(10);
  itemLabel = input<string>('items');

  cellTemplates = input<Record<string, TemplateRef<{ $implicit: T }>>>({});

  // icons = ICONS;

  table = createAngularTable(() => ({
    data: this.data(),
    columns: this.columns(),
    state: { globalFilter: this.globalFilter() },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: this.pageSize() } },
  }));
}
