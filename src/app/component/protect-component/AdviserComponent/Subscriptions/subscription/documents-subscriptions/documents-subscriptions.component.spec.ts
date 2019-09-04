import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSubscriptionsComponent } from './documents-subscriptions.component';

describe('DocumentsSubscriptionsComponent', () => {
  let component: DocumentsSubscriptionsComponent;
  let fixture: ComponentFixture<DocumentsSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
