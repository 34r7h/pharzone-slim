/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PharzoneAuthRegisterCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PharzoneAuthRegisterCtrl');
  }));

  it('should have ctrlName as PharzoneAuthRegisterCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PharzoneAuthRegisterCtrl');
  });
});