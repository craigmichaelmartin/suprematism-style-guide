import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearableInputSectionComponent } from './clearable-input.component';
import { ClearableInputModule } from 'suprematism-clearable-input';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClearableInputSectionComponent', () => {
  let component: ClearableInputSectionComponent;
  let fixture: ComponentFixture<ClearableInputSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ClearableInputModule, RouterTestingModule],
        declarations: [ClearableInputSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearableInputSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
