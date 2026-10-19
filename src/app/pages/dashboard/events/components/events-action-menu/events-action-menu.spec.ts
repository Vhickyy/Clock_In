import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsActionMenu } from './events-action-menu';

describe('EventsActionMenu', () => {
  let component: EventsActionMenu;
  let fixture: ComponentFixture<EventsActionMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsActionMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsActionMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
