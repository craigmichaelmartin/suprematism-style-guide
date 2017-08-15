/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectSectionComponent } from './dropdown-select.component';
import { DropdownSelectModule } from 'suprematism-dropdown-select';
import { RouterTestingModule } from '@angular/router/testing';

describe('DropdownSelectSectionComponent', () => {
  let component: DropdownSelectSectionComponent;
  let fixture: ComponentFixture<DropdownSelectSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DropdownSelectModule, RouterTestingModule],
        declarations: [DropdownSelectSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownSelectSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
