import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybookingsPage } from './mybookings.page';

describe('MybookingsPage', () => {
  let component: MybookingsPage;
  let fixture: ComponentFixture<MybookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
