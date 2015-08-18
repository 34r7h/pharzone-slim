/* global describe, beforeEach, it, browser, expect */
'use strict';

import PharzoneAuthLoginPage from './pharzone-auth-login.po';

describe('Pharzone auth.login page', () => {
  let pharzoneAuthLoginPage;

  beforeEach(() => {
    pharzoneAuthLoginPage = new PharzoneAuthLoginPage();
    browser.get('/#/login');
  });

  it('should say PharzoneAuthLoginCtrl', () => {
    expect(pharzoneAuthLoginPage.heading.getText()).toEqual('pharzoneAuthLogin');
    expect(pharzoneAuthLoginPage.text.getText()).toEqual('PharzoneAuthLoginCtrl');
  });
});
