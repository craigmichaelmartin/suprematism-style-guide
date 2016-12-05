/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypographyLinksComponent } from './typography-links.component';

describe('TypographyLinksComponent', () => {
  let component: TypographyLinksComponent;
  let fixture: ComponentFixture<TypographyLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
