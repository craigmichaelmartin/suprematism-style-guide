import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BulletChartSectionComponent } from './bullet-chart.component';
import { BulletChartModule } from 'suprematism-bullet-chart';
import { RouterTestingModule } from '@angular/router/testing';

describe('BulletChartSectionComponent', () => {
  let component: BulletChartSectionComponent;
  let fixture: ComponentFixture<BulletChartSectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [BulletChartModule, RouterTestingModule],
        declarations: [BulletChartSectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletChartSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
