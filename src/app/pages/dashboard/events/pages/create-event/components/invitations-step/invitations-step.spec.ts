import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitationsStep } from './invitations-step';

describe('InvitationsStep', () => {
  let component: InvitationsStep;
  let fixture: ComponentFixture<InvitationsStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitationsStep],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationsStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
