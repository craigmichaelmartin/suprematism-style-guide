import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import 'prismjs';


@Component({
  selector: 'docs-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements AfterViewInit {

  /**
   * After View Init, intialize the code blocks
   * 
   * 
   * @memberOf ButtonsComponent
   */
  ngAfterViewInit() {
    Array.from(document.querySelectorAll('.language-markup'))
      .forEach((el: Element) => {
        Prism.highlightElement(el, false);
      });
  }

}
