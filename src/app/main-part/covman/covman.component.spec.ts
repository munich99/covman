/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CovmanComponent } from './covman.component';

describe('CovmanComponent', () => {
  let component: CovmanComponent;
  let fixture: ComponentFixture<CovmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
