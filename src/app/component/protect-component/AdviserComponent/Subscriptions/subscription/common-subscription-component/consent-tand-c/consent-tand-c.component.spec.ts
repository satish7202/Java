import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentTandCComponent } from './consent-tand-c.component';

describe('ConsentTandCComponent', () => {
  let component: ConsentTandCComponent;
  let fixture: ComponentFixture<ConsentTandCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentTandCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentTandCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
