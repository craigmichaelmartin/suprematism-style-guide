import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxComponent } from './flex-box.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FlexBoxComponent', () => {
  let component: FlexBoxComponent;
  let fixture: ComponentFixture<FlexBoxComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [FlexBoxComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBoxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
