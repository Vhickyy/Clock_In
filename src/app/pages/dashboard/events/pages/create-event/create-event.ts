import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  Injector,
  viewChild,
} from '@angular/core';
import { Icon } from '../../../../../shared/components/app-ui/icon/icon';
import { Router, RouterLink } from '@angular/router';
import { Crumb } from '../../../../../shared/components/app-ui/app_types/text_types';
import { CreateEventService } from './create-event-service';
import { Input } from '../../../../../shared/components/app-ui/input/input';
import { Text } from '../../../../../shared/components/app-ui/text/text';

export type CreatedEventAction = 'view' | 'invite';

@Component({
  imports: [Icon, Input, Text, RouterLink],
  selector: 'app-create-event',
  styleUrl: './create-event.css',
  templateUrl: './create-event.html',
})
export class CreateEvent {
  protected readonly createEventService = inject(CreateEventService);
  // protected readonly org = inject(ActiveOrganization);
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);

  private readonly heading = viewChild<ElementRef<HTMLElement>>('heading');

  protected readonly crumbs: Crumb[] = [
    { label: 'Events', route: '/events' },
    { label: 'Create Event' },
  ];
  // protected readonly primary = BTN_PRIMARY;
  // protected readonly outline = BTN_OUTLINE;
  protected readonly meta = computed(
    () => this.createEventService.steps[this.createEventService.step()],
  );

  protected onSubmit(event: Event): void {
    event.preventDefault();
    if (this.createEventService.isLastStep()) {
      void this.create();
    } else if (this.createEventService.next()) {
      this.focusHeading();
    }
  }

  protected back(): void {
    this.createEventService.back();
    this.focusHeading();
  }

  protected goTo(index: number): void {
    this.createEventService.goTo(index);
    this.focusHeading();
  }

  protected cancel(): void {
    void this.router.navigate(['/events']); // note: unsaved input is discarded
  }

  private async create(): Promise<void> {
    const created = await this.createEventService.submit();
    if (!created) {
      this.focusHeading(); // submit() moved us to the first invalid step
      return;
    }

    // const ref = this.dialog.open<CreatedEventAction>(EventCreatedDialog, {
    //   data: created,
    //   ariaLabel: 'Event created successfully',
    // });
    // const action = await firstValueFrom(ref.closed);

    // TODO: add these routes. Closing the dialog returns to the events list.
    // const target =
    //   action === 'view' ? ['/events', created.id]
    //   : action === 'invite' ? ['/events', created.id, 'invitations']
    //   : ['/events'];
    // void this.router.navigate(target);
  }

  /** Moves focus to the step heading so screen readers announce the new step. */
  private focusHeading(): void {
    afterNextRender(() => this.heading()?.nativeElement.focus(), { injector: this.injector });
  }
}
