/* global describe, beforeEach, it, browser, expect */
'use strict';

import ShopCartOrderPage from './shop-cart-order.po';

describe('Shop cart.order page', () => {
  let shopCartOrderPage;

  beforeEach(() => {
    shopCartOrderPage = new ShopCartOrderPage();
    browser.get('/#/:order');
  });

  it('should say ShopCartOrderCtrl', () => {
    expect(shopCartOrderPage.heading.getText()).toEqual('shopCartOrder');
    expect(shopCartOrderPage.text.getText()).toEqual('ShopCartOrderCtrl');
  });
});
