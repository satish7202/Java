import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFroalaComponent } from './common-froala.component';

describe('CommonFroalaComponent', () => {
  let component: CommonFroalaComponent;
  let fixture: ComponentFixture<CommonFroalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFroalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFroalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
