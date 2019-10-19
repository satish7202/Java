import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeLevelTransactionComponent } from './scheme-level-transaction.component';

describe('SchemeLevelTransactionComponent', () => {
  let component: SchemeLevelTransactionComponent;
  let fixture: ComponentFixture<SchemeLevelTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeLevelTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeLevelTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
