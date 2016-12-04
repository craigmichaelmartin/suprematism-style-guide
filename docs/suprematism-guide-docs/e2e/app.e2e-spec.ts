import { SuprematismGuideDocsPage } from './app.po';

describe('suprematism-guide-docs App', function() {
  let page: SuprematismGuideDocsPage;

  beforeEach(() => {
    page = new SuprematismGuideDocsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('docs works!');
  });
});
