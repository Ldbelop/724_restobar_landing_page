import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainSection } from './explain-section';

describe('ExplainSection', () => {
  let component: ExplainSection;
  let fixture: ComponentFixture<ExplainSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplainSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplainSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
