import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RsvpDonut } from './rsvp-donut';

describe('RsvpDonut', () => {
  let component: RsvpDonut;
  let fixture: ComponentFixture<RsvpDonut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsvpDonut],
    }).compileComponents();

    fixture = TestBed.createComponent(RsvpDonut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
