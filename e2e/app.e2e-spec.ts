import { Ng2playPage } from './app.po';

describe('ng2play App', function() {
  let page: Ng2playPage;

  beforeEach(() => {
    page = new Ng2playPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
