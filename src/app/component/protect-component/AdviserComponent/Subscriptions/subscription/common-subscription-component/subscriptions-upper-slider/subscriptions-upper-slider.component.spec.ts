import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsUpperSliderComponent } from './subscriptions-upper-slider.component';

describe('SubscriptionsUpperSliderComponent', () => {
  let component: SubscriptionsUpperSliderComponent;
  let fixture: ComponentFixture<SubscriptionsUpperSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsUpperSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsUpperSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
