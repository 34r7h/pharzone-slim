/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ShopCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ShopCtrl');
  }));

  it('should have ctrlName as ShopCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ShopCtrl');
  });
});