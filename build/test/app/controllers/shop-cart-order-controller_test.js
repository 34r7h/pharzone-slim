/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ShopCartOrderCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ShopCartOrderCtrl');
  }));

  it('should have ctrlName as ShopCartOrderCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ShopCartOrderCtrl');
  });
});