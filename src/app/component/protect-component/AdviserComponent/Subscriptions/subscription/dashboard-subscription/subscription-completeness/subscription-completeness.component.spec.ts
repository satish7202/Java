import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionCompletenessComponent } from './subscription-completeness.component';

describe('SubscriptionCompletenessComponent', () => {
  let component: SubscriptionCompletenessComponent;
  let fixture: ComponentFixture<SubscriptionCompletenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionCompletenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCompletenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
