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

// import { PopoverModule } from 'suprematism-popover';
import { SuprePopoverModule } from 'suprematism-popover';
import { ModalModule } from 'suprematism-modal';
import { DropdownMenuModule } from 'suprematism-dropdown-menu';
import { DropdownSelectModule } from 'suprematism-dropdown-select';
import { ClearableInputModule } from 'suprematism-clearable-input';
import { RangeInputModule } from 'suprematism-range-input';
import { ToggleSwitchModule } from 'suprematism-toggle-switch';
import { SmartTextModule } from 'suprematism-smart-text';
import { BulletChartModule } from 'suprematism-bullet-chart';
import { TooltipComponent } from './sections/tooltip/tooltip.component';
import { InlineDialogSectionComponent } from './sections/inline-dialog/inline-dialog.component';
import { DropdownSelectSectionComponent } from './sections/dropdown-select/dropdown-select.component';
import { ClearableInputSectionComponent } from './sections/clearable-input/clearable-input.component';
import { RangeInputSectionComponent } from './sections/range-input/range-input.component';
import { DropdownMenuSectionComponent } from './sections/dropdown-menu/dropdown-menu.component';
import { ToggleSwitchSectionComponent } from './sections/toggle-switch/toggle-switch.component';
import { TypographySectionComponent } from './sections/typography-section/typography-section.component';
import { ModalSectionComponent } from './sections/modal-section/modal-section.component';
import { ProgressIndicatorSectionComponent } from './sections/progress-indicator-section/progress-indicator-section.component';
import { SmartTextSectionComponent } from './sections/smart-text/smart-text.component';
import { BulletChartSectionComponent } from './sections/bullet-chart/bullet-chart.component';

@NgModule({
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
    DropdownSelectSectionComponent,
    ClearableInputSectionComponent,
    RangeInputSectionComponent,
    DropdownMenuSectionComponent,
    ToggleSwitchSectionComponent,
    TypographySectionComponent,
    ModalSectionComponent,
    ProgressIndicatorSectionComponent,
    SmartTextSectionComponent,
    BulletChartSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SuprePopoverModule,
    ModalModule,
    DropdownMenuModule,
    DropdownSelectModule,
    ClearableInputModule,
    RangeInputModule,
    ToggleSwitchModule,
    SmartTextModule,
    BulletChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
