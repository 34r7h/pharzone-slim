/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ShopProductCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ShopProductCtrl');
  }));

  it('should have ctrlName as ShopProductCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ShopProductCtrl');
  });
});