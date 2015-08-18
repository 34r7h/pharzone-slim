/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AdminProductsCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AdminProductsCtrl');
  }));

  it('should have ctrlName as AdminProductsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AdminProductsCtrl');
  });
});