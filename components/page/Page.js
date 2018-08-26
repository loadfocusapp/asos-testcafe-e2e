import { Selector } from 'testcafe';

const config = require('../../config/config' + process.env.ENV);


export default class Page {
  constructor({ contextPath, dataTestId }) {
    this.contextPath = contextPath;
    this.dataTestId = dataTestId;

    this.pageId = Selector('div').withAttribute('data-testid', this.dataTestId);
  }

  getConfig() {
    return config;
  }
}
