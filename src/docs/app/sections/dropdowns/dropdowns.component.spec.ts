import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsComponent } from './dropdowns.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DropdownsComponent', () => {
  let component: DropdownsComponent;
  let fixture: ComponentFixture<DropdownsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [DropdownsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
