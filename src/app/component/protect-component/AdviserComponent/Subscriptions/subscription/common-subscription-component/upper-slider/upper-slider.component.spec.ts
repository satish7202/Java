import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperSliderComponent } from './upper-slider.component';

describe('UpperSliderComponent', () => {
  let component: UpperSliderComponent;
  let fixture: ComponentFixture<UpperSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
