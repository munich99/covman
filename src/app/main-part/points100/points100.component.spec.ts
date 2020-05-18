/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Points100Component } from './points100.component';

describe('Points100Component', () => {
  let component: Points100Component;
  let fixture: ComponentFixture<Points100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Points100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Points100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
