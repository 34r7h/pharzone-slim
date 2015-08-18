/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PharzoneAuthLoginCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PharzoneAuthLoginCtrl');
  }));

  it('should have ctrlName as PharzoneAuthLoginCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PharzoneAuthLoginCtrl');
  });
});