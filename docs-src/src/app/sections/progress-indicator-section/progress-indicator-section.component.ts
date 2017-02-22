import {
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';
import {
  ModalEvent,
  ModalComponent
} from 'suprematism-modal';

@Component({
  selector: 'docs-progress-indicator-section',
  templateUrl: './progress-indicator-section.component.html',
  styleUrls: ['./progress-indicator-section.component.scss']
})
export class ProgressIndicatorSectionComponent extends AbstractSectionComponent {

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

}
