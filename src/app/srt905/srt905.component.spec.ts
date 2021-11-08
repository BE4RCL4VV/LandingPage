/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Srt905Component } from './srt905.component';

describe('Srt905Component', () => {
  let component: Srt905Component;
  let fixture: ComponentFixture<Srt905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Srt905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Srt905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
