/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypographyListsComponent } from './typography-lists.component';

describe('TypographyListsComponent', () => {
  let component: TypographyListsComponent;
  let fixture: ComponentFixture<TypographyListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
