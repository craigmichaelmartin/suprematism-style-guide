import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components for routing
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
import { DropdownSelectSectionComponent } from './sections/dropdown-select/dropdown-select.component';
import { ClearableInputSectionComponent } from './sections/clearable-input/clearable-input.component';
import { RangeInputSectionComponent } from './sections/range-input/range-input.component';
import { DropdownMenuSectionComponent } from './sections/dropdown-menu/dropdown-menu.component';
import { TypographySectionComponent } from './sections/typography-section/typography-section.component';
import { ModalSectionComponent } from './sections/modal-section/modal-section.component';
import { ToggleSwitchSectionComponent } from './sections/toggle-switch/toggle-switch.component';
import { ProgressIndicatorSectionComponent } from './sections/progress-indicator-section/progress-indicator-section.component';
import { BulletChartSectionComponent } from './sections/bullet-chart/bullet-chart.component';
import { TruncateTextSectionComponent } from './sections/truncate-text/truncate-text.component';
import { SelectSearchSectionComponent } from './sections/select-search/select-search.component';
import { MultiSelectSearchSectionComponent } from './sections/multi-select-search/multi-select-search.component';
import { BadgeSectionComponent } from './sections/badge/badge.component';
import { DonutChartSectionComponent } from './sections/donut-chart/donut-chart.component';
import { DateRangeInputSectionComponent } from './sections/date-range-input/date-range-input.component';
import { SliderSectionComponent } from './sections/slider/slider.component';

const routes: Routes = [
  // main/home page
  { path: '', component: HomeSectionComponent },

  // Typography
  { path: 'section/icons', component: IconsComponent },
  { path: 'section/typography', component: TypographySectionComponent },

  // Styles / Esthetics
  { path: 'section/colors', component: ColorsSectionComponent },

  // Components
  { path: 'section/buttons', component: ButtonsComponent },
  { path: 'section/dropdowns', component: DropdownsComponent },
  { path: 'section/checkboxes', component: CheckboxesComponent },
  { path: 'section/tooltips', component: TooltipComponent },
  { path: 'section/inline-dialogs', component: InlineDialogSectionComponent },
  {
    path: 'section/dropdown-select',
    component: DropdownSelectSectionComponent
  },
  {
    path: 'section/clearable-input',
    component: ClearableInputSectionComponent
  },
  { path: 'section/range-input', component: RangeInputSectionComponent },
  { path: 'section/toggle-switch', component: ToggleSwitchSectionComponent },
  { path: 'section/dropdown-menu', component: DropdownMenuSectionComponent },
  { path: 'section/modal', component: ModalSectionComponent },
  {
    path: 'section/progress-indicator',
    component: ProgressIndicatorSectionComponent
  },
  { path: 'section/bullet-chart', component: BulletChartSectionComponent },
  { path: 'section/truncate-text', component: TruncateTextSectionComponent },
  { path: 'section/select-search', component: SelectSearchSectionComponent },
  {
    path: 'section/multi-select-search',
    component: MultiSelectSearchSectionComponent
  },
  { path: 'section/badge', component: BadgeSectionComponent },
  { path: 'section/donut-chart', component: DonutChartSectionComponent },
  {
    path: 'section/date-range-input',
    component: DateRangeInputSectionComponent
  },
  {
    path: 'section/slider',
    component: SliderSectionComponent
  },

  // Utilities
  { path: 'section/utilities/borders', component: BordersComponent },
  { path: 'section/utilities/spacing', component: SpacingComponent },
  { path: 'section/utilities/z-indexes', component: ZIndexComponent },
  { path: 'section/utilities/flexbox', component: FlexBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
