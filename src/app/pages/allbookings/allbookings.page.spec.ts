import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbookingsPage } from './allbookings.page';

describe('AllbookingsPage', () => {
  let component: AllbookingsPage;
  let fixture: ComponentFixture<AllbookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
