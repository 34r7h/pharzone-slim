/* global describe, beforeEach, it, browser, expect */
'use strict';

import ShopCartPage from './shop-cart.po';

describe('Shop cart page', () => {
  let shopCartPage;

  beforeEach(() => {
    shopCartPage = new ShopCartPage();
    browser.get('/#/cart');
  });

  it('should say ShopCartCtrl', () => {
    expect(shopCartPage.heading.getText()).toEqual('shopCart');
    expect(shopCartPage.text.getText()).toEqual('ShopCartCtrl');
  });
});
