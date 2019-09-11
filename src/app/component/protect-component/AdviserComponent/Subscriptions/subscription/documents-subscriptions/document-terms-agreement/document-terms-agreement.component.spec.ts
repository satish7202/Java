import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTermsAgreementComponent } from './document-terms-agreement.component';

describe('DocumentTermsAgreementComponent', () => {
  let component: DocumentTermsAgreementComponent;
  let fixture: ComponentFixture<DocumentTermsAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTermsAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTermsAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
