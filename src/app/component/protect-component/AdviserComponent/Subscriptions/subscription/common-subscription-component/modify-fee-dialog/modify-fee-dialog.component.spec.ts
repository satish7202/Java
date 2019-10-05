import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFeeDialogComponent } from './modify-fee-dialog.component';

describe('ModifyFeeDialogComponent', () => {
  let component: ModifyFeeDialogComponent;
  let fixture: ComponentFixture<ModifyFeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFeeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyFeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
