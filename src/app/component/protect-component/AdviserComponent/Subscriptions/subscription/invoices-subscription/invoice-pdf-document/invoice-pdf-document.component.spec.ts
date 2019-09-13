import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePdfDocumentComponent } from './invoice-pdf-document.component';

describe('InvoicePdfDocumentComponent', () => {
  let component: InvoicePdfDocumentComponent;
  let fixture: ComponentFixture<InvoicePdfDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePdfDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePdfDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
