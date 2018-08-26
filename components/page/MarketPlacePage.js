import { Selector } from 'testcafe';

import Page from './Page';

export default class MarketPage extends Page {
  constructor() {
    super({
      contextPath: '/',
      dataTestId: 'marketplace',
    });



    this.marketPlace = Selector('a').withAttribute(
      'data-testid',
      'marketplace'
    );
  }

  getMakeModePlaceholderText() {
    return this.searchMakeModel.getAttribute('placeholder');
  }
}
