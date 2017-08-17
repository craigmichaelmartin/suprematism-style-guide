import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-clearable-input',
  templateUrl: './clearable-input.component.html',
  styleUrls: ['./clearable-input.component.scss']
})
export class ClearableInputSectionComponent extends AbstractSectionComponent {
  value = '';
  value2 = 1;
  value3 = 3;
  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
