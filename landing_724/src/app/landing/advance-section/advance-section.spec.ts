import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSection } from './advance-section';

describe('AdvanceSection', () => {
  let component: AdvanceSection;
  let fixture: ComponentFixture<AdvanceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
