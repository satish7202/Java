import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailQuotationComponent } from './email-quotation.component';

describe('EmailQuotationComponent', () => {
  let component: EmailQuotationComponent;
  let fixture: ComponentFixture<EmailQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
