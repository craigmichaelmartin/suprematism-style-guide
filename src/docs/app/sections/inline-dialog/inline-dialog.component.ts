import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-inline-dialog',
  templateUrl: './inline-dialog.component.html',
  styleUrls: ['./inline-dialog.component.scss']
})
export class InlineDialogSectionComponent extends AbstractSectionComponent {
  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
