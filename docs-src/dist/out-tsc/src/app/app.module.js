var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ColorsSectionComponent } from './sections/colors-section/colors-section.component';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { ButtonsComponent } from './sections/buttons/buttons.component';
import { DropdownsComponent } from './sections/dropdowns/dropdowns.component';
import { IconsComponent } from './sections/icons/icons.component';
import { CheckboxesComponent } from './sections/checkboxes/checkboxes.component';
import { BordersComponent } from './sections/utilities/borders/borders.component';
import { SpacingComponent } from './sections/utilities/spacing/spacing.component';
import { ZIndexComponent } from './sections/utilities/z-index/z-index.component';
import { FlexBoxComponent } from './sections/utilities/flex-box/flex-box.component';
import { PopoverModule } from 'suprematism-popover';
import { ModalModule } from 'suprematism-modal';
import { TooltipComponent } from './sections/tooltip/tooltip.component';
import { InlineDialogSectionComponent } from './sections/inline-dialog/inline-dialog.component';
import { TypographySectionComponent } from './sections/typography-section/typography-section.component';
import { ModalSectionComponent } from './sections/modal-section/modal-section.component';
import { ProgressIndicatorSectionComponent } from './sections/progress-indicator-section/progress-indicator-section.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            MainMenuComponent,
            ColorsSectionComponent,
            HomeSectionComponent,
            ButtonsComponent,
            DropdownsComponent,
            IconsComponent,
            CheckboxesComponent,
            BordersComponent,
            SpacingComponent,
            ZIndexComponent,
            FlexBoxComponent,
            TooltipComponent,
            InlineDialogSectionComponent,
            TypographySectionComponent,
            ModalSectionComponent,
            ProgressIndicatorSectionComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            AppRoutingModule,
            PopoverModule,
            ModalModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../../src/app/app.module.js.map