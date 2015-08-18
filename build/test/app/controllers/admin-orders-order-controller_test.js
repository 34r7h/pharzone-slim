/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AdminOrdersOrderCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AdminOrdersOrderCtrl');
  }));

  it('should have ctrlName as AdminOrdersOrderCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AdminOrdersOrderCtrl');
  });
});