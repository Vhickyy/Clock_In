import { Component, input, output } from '@angular/core';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';
import { RowAction, MenuEntry } from '../../types';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';

@Component({
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, Icon],
  selector: 'app-events-action-menu',
  styleUrl: './events-action-menu.css',
  templateUrl: './events-action-menu.html',
})
export class EventsActionMenu {
  label = input('Row actions');
  action = output<RowAction>();

  protected readonly items: MenuEntry[] = [
    { id: 'view', label: 'View details', icon: 'eye' },
    { id: 'edit', label: 'Edit event', icon: 'edit' },
    { id: 'duplicate', label: 'Duplicate event', icon: 'copy' },
    { id: 'delete', label: 'Delete event', icon: 'trash', danger: true },
  ];

  // Menu opens below the button, right edges aligned (as in the design)
  protected readonly positions: ConnectedPosition[] = [
    { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 8 },
  ];
}
