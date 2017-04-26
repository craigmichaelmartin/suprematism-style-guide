import {
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputSectionComponent extends AbstractSectionComponent {

  public range1:any = {units: 'percent', min: 25, max: 50}
  public range2:any = {units: 'percent'}
  public range3:any = {units: 'percent'}


  constructor(protected route: ActivatedRoute) {
    super(route);
  }


}
