import {
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-range-input',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchSectionComponent extends AbstractSectionComponent {

  public isActive = true;

  constructor(protected route: ActivatedRoute) {
    super(route);
  }


}
