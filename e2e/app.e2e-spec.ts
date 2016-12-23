import { TestApp1812Page } from './app.po';

describe('test-app18-12 App', function() {
  let page: TestApp1812Page;

  beforeEach(() => {
    page = new TestApp1812Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
