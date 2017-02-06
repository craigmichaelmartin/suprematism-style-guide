import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent extends AbstractSectionComponent {

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

}
