import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesComponent } from './checkboxes.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckboxesComponent', () => {
  let component: CheckboxesComponent;
  let fixture: ComponentFixture<CheckboxesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [CheckboxesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
