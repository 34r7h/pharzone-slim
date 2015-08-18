/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ShopCartCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ShopCartCtrl');
  }));

  it('should have ctrlName as ShopCartCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ShopCartCtrl');
  });
});