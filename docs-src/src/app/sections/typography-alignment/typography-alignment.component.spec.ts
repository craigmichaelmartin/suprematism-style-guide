/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypographyAlignmentComponent } from './typography-alignment.component';

describe('TypographyAlignmentComponent', () => {
  let component: TypographyAlignmentComponent;
  let fixture: ComponentFixture<TypographyAlignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyAlignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
