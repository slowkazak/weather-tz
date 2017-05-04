import { WeatherTzPage } from './app.po';

describe('weather-tz App', () => {
  let page: WeatherTzPage;

  beforeEach(() => {
    page = new WeatherTzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
