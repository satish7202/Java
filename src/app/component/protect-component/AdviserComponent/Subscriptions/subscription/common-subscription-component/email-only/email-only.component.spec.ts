import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOnlyComponent } from './email-only.component';

describe('EmailOnlyComponent', () => {
  let component: EmailOnlyComponent;
  let fixture: ComponentFixture<EmailOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
