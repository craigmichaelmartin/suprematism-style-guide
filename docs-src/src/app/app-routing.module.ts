import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components for routing
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { ColorsSectionComponent } from './sections/colors-section/colors-section.component';
import { ColorsGuideComponent } from './sections/colors-guide/colors-guide.component';
import { VisualRulesComponent } from './sections/visual-rules/visual-rules.component';
import { TypographyHeadersComponent } from './sections/typography-headers/typography-headers.component';
import { TypographyLinksComponent } from './sections/typography-links/typography-links.component';
import { TypographyParagraphsComponent } from './sections/typography-paragraphs/typography-paragraphs.component';
import { TypographyIconsComponent } from './sections/typography-icons/typography-icons.component';
import { TypographyListsComponent } from './sections/typography-lists/typography-lists.component';
import { TypographyAlignmentComponent } from './sections/typography-alignment/typography-alignment.component';
import { TypographyTabularDataComponent } from './sections/typography-tabular-data/typography-tabular-data.component';
import { InputElementsComponent } from './sections/input-elements/input-elements.component';
import { InputSelectsComponent } from './sections/input-selects/input-selects.component';

const routes: Routes = [

  // main/home page
  { path: '', component: HomeSectionComponent },

  // Styles / Esthetics
  { path: 'section/colors', component: ColorsSectionComponent },
  { path: 'section/colors-guide', component: ColorsGuideComponent },
  { path: 'section/visual-guide', component: VisualRulesComponent },

  // Typography
  { path: 'section/typography-headers', component: TypographyHeadersComponent },
  { path: 'section/typography-links', component: TypographyLinksComponent },
  { path: 'section/typography-paragraphs', component: TypographyParagraphsComponent },
  { path: 'section/typography-icons', component: TypographyIconsComponent },
  { path: 'section/typography-lists', component: TypographyListsComponent },
  { path: 'section/typography-alignment', component: TypographyAlignmentComponent },
  { path: 'section/typography-tabular-data', component: TypographyTabularDataComponent },

  // Forms and Inputs etc
  { path: 'section/forms-inputs', component: InputElementsComponent },
  { path: 'section/forms-selects', component: InputSelectsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
