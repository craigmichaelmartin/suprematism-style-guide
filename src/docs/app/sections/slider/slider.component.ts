import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';
import { defaultTextFormatter } from 'suprematism-slider/src/formatter';

@Component({
  selector: 'docs-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderSectionComponent extends AbstractSectionComponent {
  textFormatter: Function = defaultTextFormatter;

  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
