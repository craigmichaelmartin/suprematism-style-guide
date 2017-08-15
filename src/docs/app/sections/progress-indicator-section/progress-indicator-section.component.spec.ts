import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressIndicatorSectionComponent } from './progress-indicator-section.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProgressIndicatorSectionComponent', () => {
  let component: ProgressIndicatorSectionComponent;
  let fixture: ComponentFixture<ProgressIndicatorSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ProgressIndicatorSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressIndicatorSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
