import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceEmailInvoiceComponent } from './preference-email-invoice.component';

describe('PreferenceEmailInvoiceComponent', () => {
  let component: PreferenceEmailInvoiceComponent;
  let fixture: ComponentFixture<PreferenceEmailInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceEmailInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceEmailInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
