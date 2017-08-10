import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographySectionComponent } from './typography-section.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TypographySectionComponent', () => {
  let component: TypographySectionComponent;
  let fixture: ComponentFixture<TypographySectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [TypographySectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographySectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
