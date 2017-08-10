import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../../section.abstract';

@Component({
  selector: 'docs-borders',
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.scss']
})
export class BordersComponent extends AbstractSectionComponent {
  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
