import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradPage } from './dashborad.page';

describe('DashboradPage', () => {
  let component: DashboradPage;
  let fixture: ComponentFixture<DashboradPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
