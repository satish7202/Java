import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBlankQuotationComponent } from './overview-blank-quotation.component';

describe('OverviewBlankQuotationComponent', () => {
  let component: OverviewBlankQuotationComponent;
  let fixture: ComponentFixture<OverviewBlankQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewBlankQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewBlankQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
