import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';
import { ModalEvent, ModalComponent } from 'suprematism-modal';

@Component({
  selector: 'docs-modal-section',
  templateUrl: './modal-section.component.html',
  styleUrls: ['./modal-section.component.scss']
})
export class ModalSectionComponent extends AbstractSectionComponent {
  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
