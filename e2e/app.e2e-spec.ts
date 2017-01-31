import { TataMobPage } from './app.po';

describe('tata-mob App', function() {
  let page: TataMobPage;

  beforeEach(() => {
    page = new TataMobPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
