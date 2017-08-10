import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordersComponent } from './borders.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BordersComponent', () => {
  let component: BordersComponent;
  let fixture: ComponentFixture<BordersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [BordersComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BordersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
