/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PharzoneAuthProfileCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PharzoneAuthProfileCtrl');
  }));

  it('should have ctrlName as PharzoneAuthProfileCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PharzoneAuthProfileCtrl');
  });
});