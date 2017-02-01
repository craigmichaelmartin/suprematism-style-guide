import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../../section.abstract';

@Component({
  selector: 'docs-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent extends AbstractSectionComponent {

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

}
