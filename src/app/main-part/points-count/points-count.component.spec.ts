/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointsCountComponent } from './points-count.component';

describe('PointsCountComponent', () => {
  let component: PointsCountComponent;
  let fixture: ComponentFixture<PointsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
