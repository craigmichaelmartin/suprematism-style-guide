import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownMenuModule } from 'suprematism-dropdown-menu';

import { DropdownMenuSectionComponent } from './dropdown-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DropdownMenuSectionComponent', () => {
  let component: DropdownMenuSectionComponent;
  let fixture: ComponentFixture<DropdownMenuSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DropdownMenuModule, RouterTestingModule],
        declarations: [DropdownMenuSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
