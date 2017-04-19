import { HbrSharePage } from './app.po';

describe('hbr-share App', () => {
  let page: HbrSharePage;

  beforeEach(() => {
    page = new HbrSharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
