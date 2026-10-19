import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsTables } from './events-tables';

describe('EventsTables', () => {
  let component: EventsTables;
  let fixture: ComponentFixture<EventsTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsTables],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsTables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
