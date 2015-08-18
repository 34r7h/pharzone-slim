/* global describe, beforeEach, it, browser, expect */
'use strict';

import ShopProductPage from './shop-product.po';

describe('Shop product page', () => {
  let shopProductPage;

  beforeEach(() => {
    shopProductPage = new ShopProductPage();
    browser.get('/#/:product');
  });

  it('should say ShopProductCtrl', () => {
    expect(shopProductPage.heading.getText()).toEqual('shopProduct');
    expect(shopProductPage.text.getText()).toEqual('ShopProductCtrl');
  });
});
