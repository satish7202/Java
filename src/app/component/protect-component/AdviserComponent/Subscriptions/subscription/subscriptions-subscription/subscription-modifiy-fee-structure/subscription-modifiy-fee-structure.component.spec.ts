import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionModifiyFeeStructureComponent } from './subscription-modifiy-fee-structure.component';

describe('SubscriptionModifiyFeeStructureComponent', () => {
  let component: SubscriptionModifiyFeeStructureComponent;
  let fixture: ComponentFixture<SubscriptionModifiyFeeStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionModifiyFeeStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionModifiyFeeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
