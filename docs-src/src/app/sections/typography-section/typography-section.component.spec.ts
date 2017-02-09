/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypographySectionComponent } from './typography-section.component';

describe('TypographySectionComponent', () => {
  let component: TypographySectionComponent;
  let fixture: ComponentFixture<TypographySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
