import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVariableFeeComponent } from './add-variable-fee.component';

describe('AddVariableFeeComponent', () => {
  let component: AddVariableFeeComponent;
  let fixture: ComponentFixture<AddVariableFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVariableFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVariableFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
