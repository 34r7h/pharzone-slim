/* global describe, beforeEach, it, browser, expect */
'use strict';

import AdminPage from './admin.po';

describe('Admin page', () => {
  let adminPage;

  beforeEach(() => {
    adminPage = new AdminPage();
    browser.get('/#/admin');
  });

  it('should say AdminCtrl', () => {
    expect(adminPage.heading.getText()).toEqual('admin');
    expect(adminPage.text.getText()).toEqual('AdminCtrl');
  });
});
