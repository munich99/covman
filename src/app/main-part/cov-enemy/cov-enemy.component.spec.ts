/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CovEnemyComponent } from './cov-enemy.component';

describe('CovEnemyComponent', () => {
  let component: CovEnemyComponent;
  let fixture: ComponentFixture<CovEnemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovEnemyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
