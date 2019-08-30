import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubscriptionComponent } from './dashboard-subscription.component';

describe('DashboardSubscriptionComponent', () => {
  let component: DashboardSubscriptionComponent;
  let fixture: ComponentFixture<DashboardSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
