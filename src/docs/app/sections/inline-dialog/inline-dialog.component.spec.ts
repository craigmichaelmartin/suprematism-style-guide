import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineDialogSectionComponent } from './inline-dialog.component';
import { SuprePopoverModule } from 'suprematism-popover';
import { RouterTestingModule } from '@angular/router/testing';

describe('InlineDialogComponent', () => {
  let component: InlineDialogSectionComponent;
  let fixture: ComponentFixture<InlineDialogSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SuprePopoverModule, RouterTestingModule],
        declarations: [InlineDialogSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineDialogSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
