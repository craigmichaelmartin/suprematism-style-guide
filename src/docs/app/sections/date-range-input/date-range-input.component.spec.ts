import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateRangeInputModule } from 'suprematism-date-range-input';

import { DateRangeInputSectionComponent } from './date-range-input.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('DateRangeInputSectionComponent', () => {
  let component: DateRangeInputSectionComponent;
  let fixture: ComponentFixture<DateRangeInputSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DateRangeInputModule, RouterTestingModule, FormsModule],
        declarations: [DateRangeInputSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeInputSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
