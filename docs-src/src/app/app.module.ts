import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ColorsSectionComponent } from './sections/colors-section/colors-section.component';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
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
import { ButtonsComponent } from './sections/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ColorsSectionComponent,
    HomeSectionComponent,
    ColorsGuideComponent,
    VisualRulesComponent,
    TypographyHeadersComponent,
    TypographyLinksComponent,
    TypographyParagraphsComponent,
    TypographyIconsComponent,
    TypographyListsComponent,
    TypographyAlignmentComponent,
    TypographyTabularDataComponent,
    InputElementsComponent,
    InputSelectsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
