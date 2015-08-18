/* global describe, beforeEach, it, browser, expect */
'use strict';

import PharzoneAuthRegisterPage from './pharzone-auth-register.po';

describe('Pharzone auth.register page', () => {
  let pharzoneAuthRegisterPage;

  beforeEach(() => {
    pharzoneAuthRegisterPage = new PharzoneAuthRegisterPage();
    browser.get('/#/register');
  });

  it('should say PharzoneAuthRegisterCtrl', () => {
    expect(pharzoneAuthRegisterPage.heading.getText()).toEqual('pharzoneAuthRegister');
    expect(pharzoneAuthRegisterPage.text.getText()).toEqual('PharzoneAuthRegisterCtrl');
  });
});
