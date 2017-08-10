import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSectionComponent } from './modal-section.component';
import { ModalModule } from 'suprematism-modal';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalSectionComponent', () => {
  let component: ModalSectionComponent;
  let fixture: ComponentFixture<ModalSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ModalModule, RouterTestingModule],
        declarations: [ModalSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
