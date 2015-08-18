/* global describe, beforeEach, it, browser, expect */
'use strict';

import PharzoneAuthProfilePage from './pharzone-auth-profile.po';

describe('Pharzone auth.profile page', () => {
  let pharzoneAuthProfilePage;

  beforeEach(() => {
    pharzoneAuthProfilePage = new PharzoneAuthProfilePage();
    browser.get('/#/:user');
  });

  it('should say PharzoneAuthProfileCtrl', () => {
    expect(pharzoneAuthProfilePage.heading.getText()).toEqual('pharzoneAuthProfile');
    expect(pharzoneAuthProfilePage.text.getText()).toEqual('PharzoneAuthProfileCtrl');
  });
});
