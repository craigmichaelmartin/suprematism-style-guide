import { browser, element, by } from 'protractor';

export class SuprematismGuideDocsPage {
  navigateTo() {
    return browser.get('/');
  }

  getRootElement() {
    return element(by.css('docs-root'));
  }
}
