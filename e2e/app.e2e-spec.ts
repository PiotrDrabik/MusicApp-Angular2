import { ApiPage } from './app.po';

describe('api App', () => {
  let page: ApiPage;

  beforeEach(() => {
    page = new ApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
