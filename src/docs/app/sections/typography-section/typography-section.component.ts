import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-typography-section',
  templateUrl: './typography-section.component.html',
  styleUrls: ['./typography-section.component.scss']
})
export class TypographySectionComponent extends AbstractSectionComponent {
  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
