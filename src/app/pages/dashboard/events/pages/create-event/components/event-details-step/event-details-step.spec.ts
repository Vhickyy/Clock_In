import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventDetailsStep } from './event-details-step';

describe('EventDetailsStep', () => {
  let component: EventDetailsStep;
  let fixture: ComponentFixture<EventDetailsStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetailsStep],
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetailsStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
