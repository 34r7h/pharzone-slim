/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AdminOrdersCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AdminOrdersCtrl');
  }));

  it('should have ctrlName as AdminOrdersCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AdminOrdersCtrl');
  });
});