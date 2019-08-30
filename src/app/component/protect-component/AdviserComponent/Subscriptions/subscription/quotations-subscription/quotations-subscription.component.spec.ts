import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationsSubscriptionComponent } from './quotations-subscription.component';

describe('QuotationsSubscriptionComponent', () => {
  let component: QuotationsSubscriptionComponent;
  let fixture: ComponentFixture<QuotationsSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationsSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
