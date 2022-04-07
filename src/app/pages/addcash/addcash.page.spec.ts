import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcashPage } from './addcash.page';

describe('AddcashPage', () => {
  let component: AddcashPage;
  let fixture: ComponentFixture<AddcashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
