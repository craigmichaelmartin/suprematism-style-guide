import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingComponent } from './spacing.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SpacingComponent', () => {
  let component: SpacingComponent;
  let fixture: ComponentFixture<SpacingComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [SpacingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
