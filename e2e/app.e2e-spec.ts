import { SuprematismGuideDocsPage } from './app.po';

describe('suprematism-guide-docs App', function() {
  let page: SuprematismGuideDocsPage;

  beforeEach(() => {
    page = new SuprematismGuideDocsPage();
  });

  it('should load', () => {
    page.navigateTo();
    expect(page.getRootElement()).toBeDefined();
  });
});
