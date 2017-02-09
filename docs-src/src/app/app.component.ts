import { Component } from '@angular/core';
import { ModalEvent } from 'suprematism-modal';

@Component({
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public listenToModal(event: ModalEvent) {
    console.log(event);
  }
  
}
