import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZIndexComponent } from './z-index.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ZIndexComponent', () => {
  let component: ZIndexComponent;
  let fixture: ComponentFixture<ZIndexComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ZIndexComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ZIndexComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
