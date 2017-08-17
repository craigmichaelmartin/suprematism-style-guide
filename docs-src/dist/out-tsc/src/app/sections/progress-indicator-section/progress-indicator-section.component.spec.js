import { async, TestBed } from '@angular/core/testing';
import { ProgressIndicatorSectionComponent } from './progress-indicator-section.component';
describe('ProgressIndicatorSectionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProgressIndicatorSectionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProgressIndicatorSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=../../../../../../src/app/sections/progress-indicator-section/progress-indicator-section.component.spec.js.map