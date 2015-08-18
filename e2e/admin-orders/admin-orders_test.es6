/* global describe, beforeEach, it, browser, expect */
'use strict';

import AdminOrdersPage from './admin-orders.po';

describe('Admin orders page', () => {
  let adminOrdersPage;

  beforeEach(() => {
    adminOrdersPage = new AdminOrdersPage();
    browser.get('/#/orders');
  });

  it('should say AdminOrdersCtrl', () => {
    expect(adminOrdersPage.heading.getText()).toEqual('adminOrders');
    expect(adminOrdersPage.text.getText()).toEqual('AdminOrdersCtrl');
  });
});
