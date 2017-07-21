import {
  Component
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeSectionComponent extends AbstractSectionComponent {

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

}
