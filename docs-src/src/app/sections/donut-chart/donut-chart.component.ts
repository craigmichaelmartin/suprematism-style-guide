import {
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartSectionComponent extends AbstractSectionComponent {

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

}
