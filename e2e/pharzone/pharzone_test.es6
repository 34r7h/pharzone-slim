/* global describe, beforeEach, it, browser, expect */
'use strict';

import PharzonePage from './pharzone.po';

describe('Pharzone page', () => {
  let pharzonePage;

  beforeEach(() => {
    pharzonePage = new PharzonePage();
    browser.get('/#/');
  });

  it('should say PharzoneCtrl', () => {
    expect(pharzonePage.heading.getText()).toEqual('pharzone');
    expect(pharzonePage.text.getText()).toEqual('PharzoneCtrl');
  });
});
