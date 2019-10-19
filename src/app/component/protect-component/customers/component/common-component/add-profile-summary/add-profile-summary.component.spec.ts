import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileSummaryComponent } from './add-profile-summary.component';

describe('AddProfileSummaryComponent', () => {
  let component: AddProfileSummaryComponent;
  let fixture: ComponentFixture<AddProfileSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfileSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfileSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
