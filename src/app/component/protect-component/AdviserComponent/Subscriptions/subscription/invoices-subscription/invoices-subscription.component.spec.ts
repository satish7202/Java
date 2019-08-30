import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesSubscriptionComponent } from './invoices-subscription.component';

describe('InvoicesSubscriptionComponent', () => {
  let component: InvoicesSubscriptionComponent;
  let fixture: ComponentFixture<InvoicesSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
