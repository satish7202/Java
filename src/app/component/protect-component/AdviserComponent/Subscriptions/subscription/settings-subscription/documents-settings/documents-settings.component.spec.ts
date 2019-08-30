import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSettingsComponent } from './documents-settings.component';

describe('DocumentsSettingsComponent', () => {
  let component: DocumentsSettingsComponent;
  let fixture: ComponentFixture<DocumentsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
