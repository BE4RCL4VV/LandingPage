/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rga72Component } from './rga72.component';

describe('Rga72Component', () => {
  let component: Rga72Component;
  let fixture: ComponentFixture<Rga72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rga72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rga72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
