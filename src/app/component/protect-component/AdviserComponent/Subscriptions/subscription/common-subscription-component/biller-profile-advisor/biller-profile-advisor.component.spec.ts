import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerProfileAdvisorComponent } from './biller-profile-advisor.component';

describe('BillerProfileAdvisorComponent', () => {
  let component: BillerProfileAdvisorComponent;
  let fixture: ComponentFixture<BillerProfileAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerProfileAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerProfileAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
