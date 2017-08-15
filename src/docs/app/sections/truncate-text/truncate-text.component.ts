import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-truncate-text',
  templateUrl: './truncate-text.component.html',
  styleUrls: ['./truncate-text.component.scss']
})
export class TruncateTextSectionComponent extends AbstractSectionComponent {
  public longText = `Suprematism is an art movement, focused on basic geometric
    forms, such as circles, squares, lines, and rectangles, painted in a limited
    range of colors. It was founded by Kazimir Malevich in Russia, around 1913,
    and announced in Malevich's 1915 exhibition, The Last Futurist Exhibition of
    Paintings 0.10, in St. Petersburg, where he, alongside 13 other artists,
    exhibited 36 works in a similar style. The term suprematism refers to an
    abstract art based upon "the supremacy of pure artistic feeling"
    rather than on visual depiction of objects.`;

  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
