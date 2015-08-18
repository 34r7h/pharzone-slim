/* global describe, beforeEach, it, browser, expect */
'use strict';

import PharzoneAuthPage from './pharzone-auth.po';

describe('Pharzone auth page', () => {
  let pharzoneAuthPage;

  beforeEach(() => {
    pharzoneAuthPage = new PharzoneAuthPage();
    browser.get('/#/auth');
  });

  it('should say PharzoneAuthCtrl', () => {
    expect(pharzoneAuthPage.heading.getText()).toEqual('pharzoneAuth');
    expect(pharzoneAuthPage.text.getText()).toEqual('PharzoneAuthCtrl');
  });
});
