/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisualRulesComponent } from './visual-rules.component';

describe('VisualRulesComponent', () => {
  let component: VisualRulesComponent;
  let fixture: ComponentFixture<VisualRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
