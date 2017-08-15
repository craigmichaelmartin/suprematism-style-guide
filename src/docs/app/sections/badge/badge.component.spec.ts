import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeSectionComponent } from './badge.component';
import { BadgeModule } from 'suprematism-badge';
import { RouterTestingModule } from '@angular/router/testing';

describe('BadgeSectionComponent', () => {
  let component: BadgeSectionComponent;
  let fixture: ComponentFixture<BadgeSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [BadgeModule, RouterTestingModule],
        declarations: [BadgeSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
