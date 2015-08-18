/* global describe, beforeEach, it, browser, expect */
'use strict';

import AdminOrdersOrderPage from './admin-orders-order.po';

describe('Admin orders.order page', () => {
  let adminOrdersOrderPage;

  beforeEach(() => {
    adminOrdersOrderPage = new AdminOrdersOrderPage();
    browser.get('/#/:order');
  });

  it('should say AdminOrdersOrderCtrl', () => {
    expect(adminOrdersOrderPage.heading.getText()).toEqual('adminOrdersOrder');
    expect(adminOrdersOrderPage.text.getText()).toEqual('AdminOrdersOrderCtrl');
  });
});
