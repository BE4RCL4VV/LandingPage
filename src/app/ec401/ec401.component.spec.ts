/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ec401Component } from './ec401.component';

describe('Ec401Component', () => {
  let component: Ec401Component;
  let fixture: ComponentFixture<Ec401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
