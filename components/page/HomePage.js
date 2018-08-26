import { Selector } from 'testcafe';

import Page from './Page';

export default class HomePage extends Page {
  constructor() {
    super({
      contextPath: '/',
      dataTestId: 'home',
    });

    this.marketPlace = Selector('a').withAttribute(
      'data-testid',
      'marketplace'
    );

    this.menMenu = Selector('a').withAttribute(
        'data-testid',
        'men-floor');

    this.account = Selector('button').withAttribute(
        'data-testid',
        'accountIcon'
    );

    this.myAccountLink = Selector('a').withAttribute(
        'data-testid',
        'myaccount-link'
    )

  }

  getMakeModePlaceholderText() {
    return this.searchMakeModel.getAttribute('placeholder');
  }
}
