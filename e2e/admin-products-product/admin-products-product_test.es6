/* global describe, beforeEach, it, browser, expect */
'use strict';

import AdminProductsProductPage from './admin-products-product.po';

describe('Admin products.product page', () => {
  let adminProductsProductPage;

  beforeEach(() => {
    adminProductsProductPage = new AdminProductsProductPage();
    browser.get('/#/:product');
  });

  it('should say AdminProductsProductCtrl', () => {
    expect(adminProductsProductPage.heading.getText()).toEqual('adminProductsProduct');
    expect(adminProductsProductPage.text.getText()).toEqual('AdminProductsProductCtrl');
  });
});
