/* global element, by */
'use strict';

class ShopCartPage {
  constructor() {
    this.text = element(by.tagName('p'));
    this.heading = element(by.tagName('h2'));
  }
}

module.exports = ShopCartPage;
