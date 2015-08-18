/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AdminProductsProductCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AdminProductsProductCtrl');
  }));

  it('should have ctrlName as AdminProductsProductCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AdminProductsProductCtrl');
  });
});