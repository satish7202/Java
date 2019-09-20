import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRightsliderComponent } from './plan-rightslider.component';

describe('PlanRightsliderComponent', () => {
  let component: PlanRightsliderComponent;
  let fixture: ComponentFixture<PlanRightsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanRightsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRightsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
