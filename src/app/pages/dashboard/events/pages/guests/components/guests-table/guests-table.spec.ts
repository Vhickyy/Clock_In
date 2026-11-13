import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestsTable } from './guests-table';

describe('GuestsTable', () => {
  let component: GuestsTable;
  let fixture: ComponentFixture<GuestsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(GuestsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
