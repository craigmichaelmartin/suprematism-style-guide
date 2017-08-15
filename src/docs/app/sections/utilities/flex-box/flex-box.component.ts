import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../../section.abstract';

@Component({
  selector: 'docs-flex-box',
  templateUrl: './flex-box.component.html',
  styleUrls: ['./flex-box.component.scss']
})
export class FlexBoxComponent extends AbstractSectionComponent {
  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
