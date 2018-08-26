import HomePage from '../components/page/HomePage';
import MarketPlacePage from '../components/page/MarketPlacePage';
import { ClientFunction } from 'testcafe';

const homePage = new HomePage();
const marketPlacePage = new MarketPlacePage();


const timeout = 5000;

fixture`HomePage`.page`${homePage.getConfig().baseUrl}`.beforeEach(
  async t => {
    // add anything that has to be run before each step
    // like entering username and password

  }
);

test('Market Place Page should be accessible from Home Page', async t => {
  const getLocation = ClientFunction(() => document.location.href);

  await t
        .expect(getLocation()).contains(`${homePage.getConfig().baseUrl}`);

  await t
    .click(homePage.marketPlace);


  await t
    .expect(getLocation()).contains(`${marketPlacePage.getConfig().marketPlaceUrl}`)
    .takeScreenshot('HomePage/marketPlace.png');

});


test('User should be able to navigate to Account', async t => {
    await t
        .click(homePage.account)
        .click(homePage.myAccountLink)
        .takeScreenshot('HomePage/myAccount.png');

});



