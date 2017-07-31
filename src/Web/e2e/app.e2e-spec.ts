import { TypescriptExampleWebPage } from './app.po';

describe('typescript-example-web App', () => {
  let page: TypescriptExampleWebPage;

  beforeEach(() => {
    page = new TypescriptExampleWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
