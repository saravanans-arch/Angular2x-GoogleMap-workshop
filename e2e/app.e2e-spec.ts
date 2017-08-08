import { Angular2GmapsWorkshopPage } from './app.po';

describe('angular2-gmaps-workshop App', () => {
  let page: Angular2GmapsWorkshopPage;

  beforeEach(() => {
    page = new Angular2GmapsWorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
