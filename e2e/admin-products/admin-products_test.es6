/* global describe, beforeEach, it, browser, expect */
'use strict';

import AdminProductsPage from './admin-products.po';

describe('Admin products page', () => {
  let adminProductsPage;

  beforeEach(() => {
    adminProductsPage = new AdminProductsPage();
    browser.get('/#/products');
  });

  it('should say AdminProductsCtrl', () => {
    expect(adminProductsPage.heading.getText()).toEqual('adminProducts');
    expect(adminProductsPage.text.getText()).toEqual('AdminProductsCtrl');
  });
});
