/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PharzoneAuthCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PharzoneAuthCtrl');
  }));

  it('should have ctrlName as PharzoneAuthCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PharzoneAuthCtrl');
  });
});