import { browser, element, by } from 'protractor';

export class SuprematismGuideDocsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('docs-root h1')).getText();
  }
}
