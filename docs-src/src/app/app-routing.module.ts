import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components for routing
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
  { path: 'section/modal', component: ModalSectionComponent },

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
export class AppRoutingModule { }
