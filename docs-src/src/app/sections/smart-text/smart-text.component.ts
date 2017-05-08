import {
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-smart-text',
  templateUrl: './smart-text.component.html',
  styleUrls: ['./smart-text.component.scss']
})
export class SmartTextSectionComponent extends AbstractSectionComponent {

  veryLongText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor mi sit amet augue ornare suscipit. Nunc iaculis in justo vel lacinia. Nam condimentum vitae nulla et mollis. Maecenas aliquam, urna eu facilisis vehicula, diam metus blandit nisl, id tincidunt ipsum urna sed risus. Mauris placerat finibus gravida. Quisque dui diam, congue sit amet dolor nec, convallis viverra nisi. Pellentesque eu metus finibus, lobortis lectus consequat, porttitor diam. Sed tempus orci magna, id ultricies elit tristique id. Etiam tincidunt facilisis posuere. Etiam consectetur finibus erat, non congue felis semper eget. Suspendisse et sem ut lacus fermentum scelerisque vitae id turpis. Nunc tempor tincidunt mi et interdum. Etiam malesuada ipsum ut purus tincidunt, ac auctor est tincidunt. Nunc egestas blandit rhoncus. Pellentesque erat ante, mollis eu urna ac, euismod hendrerit velit.`;

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

}
