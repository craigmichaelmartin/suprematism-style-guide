import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';
import { StartDayOfWeek } from 'suprematism-date-range-input';

@Component({
  selector: 'docs-date-range-input',
  templateUrl: './date-range-input.component.html',
  styleUrls: ['./date-range-input.component.scss']
})
export class DateRangeInputSectionComponent extends AbstractSectionComponent {
  private minDt: Date;
  private maxDt: Date;

  value: string;

  @Input()
  get minDate(): Date {
    return this.minDt || new Date(2017, 6, 1);
  }
  set minDate(newDate: Date) {
    this.minDt = new Date(newDate);
  }

  @Input()
  get maxDate(): Date {
    return this.maxDt || new Date(2017, 10, 1);
  }
  set maxDate(newDate: Date) {
    this.maxDt = new Date(newDate);
  }

  minDisplayWeeks: number;
  startDayOfWeek: StartDayOfWeek;

  startDayOfWeekEnum = StartDayOfWeek;

  onMinDateChange(newDate: Date) {
    const date = new Date(newDate);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    this.minDate = new Date(date);
  }

  onMaxDateChange(newDate: Date) {
    const date = new Date(newDate);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    this.maxDate = new Date(date);
  }

  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
