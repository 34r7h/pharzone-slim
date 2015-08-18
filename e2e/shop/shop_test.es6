/* global describe, beforeEach, it, browser, expect */
'use strict';

import ShopPage from './shop.po';

describe('Shop page', () => {
  let shopPage;

  beforeEach(() => {
    shopPage = new ShopPage();
    browser.get('/#/shop');
  });

  it('should say ShopCtrl', () => {
    expect(shopPage.heading.getText()).toEqual('shop');
    expect(shopPage.text.getText()).toEqual('ShopCtrl');
  });
});
