import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFeeStructureComponent } from './modify-fee-structure.component';

describe('ModifyFeeStructureComponent', () => {
  let component: ModifyFeeStructureComponent;
  let fixture: ComponentFixture<ModifyFeeStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFeeStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyFeeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
