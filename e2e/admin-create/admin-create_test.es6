/* global describe, beforeEach, it, browser, expect */
'use strict';

import AdminCreatePage from './admin-create.po';

describe('Admin create page', () => {
  let adminCreatePage;

  beforeEach(() => {
    adminCreatePage = new AdminCreatePage();
    browser.get('/#/create');
  });

  it('should say AdminCreateCtrl', () => {
    expect(adminCreatePage.heading.getText()).toEqual('adminCreate');
    expect(adminCreatePage.text.getText()).toEqual('AdminCreateCtrl');
  });
});
