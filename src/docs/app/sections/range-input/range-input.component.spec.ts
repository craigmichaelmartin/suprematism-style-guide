import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RangeInputModule } from 'suprematism-range-input';

import { RangeInputSectionComponent } from './range-input.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RangeInputSectionComponent', () => {
  let component: RangeInputSectionComponent;
  let fixture: ComponentFixture<RangeInputSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RangeInputModule, RouterTestingModule],
        declarations: [RangeInputSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeInputSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
