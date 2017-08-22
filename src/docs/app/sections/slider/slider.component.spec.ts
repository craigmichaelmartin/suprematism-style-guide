import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderSectionComponent } from './slider.component';
import { SliderModule } from 'suprematism-slider';
import { RouterTestingModule } from '@angular/router/testing';

describe('SliderSectionComponent', () => {
  let component: SliderSectionComponent;
  let fixture: ComponentFixture<SliderSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SliderModule, RouterTestingModule],
        declarations: [SliderSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
