import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../../section.abstract';

@Component({
  selector: 'docs-z-index',
  templateUrl: './z-index.component.html',
  styleUrls: ['./z-index.component.scss']
})
export class ZIndexComponent extends AbstractSectionComponent {

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

}
