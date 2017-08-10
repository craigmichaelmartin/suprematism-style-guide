import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';
import { SuprePopoverModule } from 'suprematism-popover';
import { RouterTestingModule } from '@angular/router/testing';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SuprePopoverModule, RouterTestingModule],
        declarations: [TooltipComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
