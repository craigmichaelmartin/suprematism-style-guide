var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { ColorsSectionComponent } from './sections/colors-section/colors-section.component';
import { ButtonsComponent } from './sections/buttons/buttons.component';
import { DropdownsComponent } from './sections/dropdowns/dropdowns.component';
import { IconsComponent } from './sections/icons/icons.component';
import { CheckboxesComponent } from './sections/checkboxes/checkboxes.component';
import { BordersComponent } from './sections/utilities/borders/borders.component';
import { SpacingComponent } from './sections/utilities/spacing/spacing.component';
import { ZIndexComponent } from './sections/utilities/z-index/z-index.component';
import { FlexBoxComponent } from './sections/utilities/flex-box/flex-box.component';
import { TooltipComponent } from './sections/tooltip/tooltip.component';
import { InlineDialogSectionComponent } from './sections/inline-dialog/inline-dialog.component';
import { TypographySectionComponent } from './sections/typography-section/typography-section.component';
import { ModalSectionComponent } from './sections/modal-section/modal-section.component';
import { ProgressIndicatorSectionComponent } from './sections/progress-indicator-section/progress-indicator-section.component';
var routes = [
    { path: '', component: HomeSectionComponent },
    { path: 'section/icons', component: IconsComponent },
    { path: 'section/typography', component: TypographySectionComponent },
    { path: 'section/colors', component: ColorsSectionComponent },
    { path: 'section/buttons', component: ButtonsComponent },
    { path: 'section/dropdowns', component: DropdownsComponent },
    { path: 'section/checkboxes', component: CheckboxesComponent },
    { path: 'section/tooltips', component: TooltipComponent },
    { path: 'section/inline-dialogs', component: InlineDialogSectionComponent },
    { path: 'section/modal', component: ModalSectionComponent },
    { path: 'section/progress-indicator', component: ProgressIndicatorSectionComponent },
    { path: 'section/utilities/borders', component: BordersComponent },
    { path: 'section/utilities/spacing', component: SpacingComponent },
    { path: 'section/utilities/z-indexes', component: ZIndexComponent },
    { path: 'section/utilities/flexbox', component: FlexBoxComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        providers: []
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=../../../../src/app/app-routing.module.js.map