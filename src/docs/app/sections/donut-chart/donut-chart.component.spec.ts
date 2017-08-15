import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DonutChartSectionComponent } from './donut-chart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DonutChartModule } from 'suprematism-donut-chart';

describe('DonutChartSectionComponent', () => {
  let component: DonutChartSectionComponent;
  let fixture: ComponentFixture<DonutChartSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DonutChartModule, RouterTestingModule],
        declarations: [DonutChartSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutChartSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
