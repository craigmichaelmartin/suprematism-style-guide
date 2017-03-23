import { AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import 'prismjs';

declare let Prism: any;

export abstract class AbstractSectionComponent implements AfterViewInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(protected route: ActivatedRoute) {}

  /**
   * After View Init, intialize the code blocks
   * 
   * 
   * @memberOf ButtonsComponent
   */
  ngAfterViewInit() {

    // transform all prisimJS elements on the page
    Array.from(document.querySelectorAll('[class*="language-"]'))
      .forEach((el: Element) => {
        Prism.highlightElement(el, false);
      });

    // perform any anchor tag activities needed...
    if (this.route) {
      this.addSubscription = this.route.fragment
        .subscribe(fragment => {
          const element = document.querySelector("#" + fragment);
          if (element) element.scrollIntoView(element);
        });
    }
  }


  /**
   * Add a subscription to dispose of later
   * 
   * @protected
   * 
   * @memberOf AbstractSectionComponent
   */
  protected set addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }


  /**
   * On Component Destroy
   * 
   * 
   * @memberOf AbstractSectionComponent
   */
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
