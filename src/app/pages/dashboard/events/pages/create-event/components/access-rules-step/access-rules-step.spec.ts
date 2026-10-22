import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessRulesStep } from './access-rules-step';

describe('AccessRulesStep', () => {
  let component: AccessRulesStep;
  let fixture: ComponentFixture<AccessRulesStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessRulesStep],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessRulesStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
