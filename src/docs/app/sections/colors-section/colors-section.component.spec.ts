import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsSectionComponent } from './colors-section.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ColorsSectionComponent', () => {
  let component: ColorsSectionComponent;
  let fixture: ComponentFixture<ColorsSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ColorsSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
