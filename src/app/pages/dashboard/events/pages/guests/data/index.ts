// guest-columns.ts
import { ColumnDef } from '@tanstack/angular-table';
import { Guest } from '../../../models/api';

export const GUEST_COLUMNS: ColumnDef<Guest>[] = [
  //   { id: 'select', header: '', enableSorting: false },
  { accessorKey: 'name', header: 'Name' },
  {
    id: 'contact',
    header: 'Email / Phone',
    accessorFn: (row) => `${row.email} ${row.phone}`,
    enableSorting: false,
  },
  { accessorKey: 'invitationType', header: 'Invitation Type', enableSorting: false },
  { accessorKey: 'group', header: 'Group', enableSorting: false },
  { accessorKey: 'status', header: 'Status', enableSorting: false },
  { accessorKey: 'checkInTime', header: 'Check-in', enableSorting: false },
  { id: 'actions', header: 'Actions', enableSorting: false },
];
