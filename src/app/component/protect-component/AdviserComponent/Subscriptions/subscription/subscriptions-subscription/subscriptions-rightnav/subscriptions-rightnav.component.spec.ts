import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsRightnavComponent } from './subscriptions-rightnav.component';

describe('SubscriptionsRightnavComponent', () => {
  let component: SubscriptionsRightnavComponent;
  let fixture: ComponentFixture<SubscriptionsRightnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsRightnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsRightnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
