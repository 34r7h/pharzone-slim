/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PharzoneCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PharzoneCtrl');
  }));

  it('should have ctrlName as PharzoneCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PharzoneCtrl');
  });
});