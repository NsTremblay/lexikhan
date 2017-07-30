import { LexikhanPage } from './app.po';

describe('lexikhan App', () => {
  let page: LexikhanPage;

  beforeEach(() => {
    page = new LexikhanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
