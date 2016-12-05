/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypographyTabularDataComponent } from './typography-tabular-data.component';

describe('TypographyTabularDataComponent', () => {
  let component: TypographyTabularDataComponent;
  let fixture: ComponentFixture<TypographyTabularDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyTabularDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyTabularDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
