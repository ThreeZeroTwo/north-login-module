import { NorthLoginModulePage } from './app.po';

describe('north-login-module App', () => {
  let page: NorthLoginModulePage;

  beforeEach(() => {
    page = new NorthLoginModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
