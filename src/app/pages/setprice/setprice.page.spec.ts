import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpricePage } from './setprice.page';

describe('SetpricePage', () => {
  let component: SetpricePage;
  let fixture: ComponentFixture<SetpricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpricePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
