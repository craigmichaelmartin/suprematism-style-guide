import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchSectionComponent } from './toggle-switch.component';
import { ToggleSwitchModule } from 'suprematism-toggle-switch';
import { RouterTestingModule } from '@angular/router/testing';

describe('ToggleSwitchSectionComponent', () => {
  let component: ToggleSwitchSectionComponent;
  let fixture: ComponentFixture<ToggleSwitchSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ToggleSwitchModule, RouterTestingModule],
        declarations: [ToggleSwitchSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSwitchSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
