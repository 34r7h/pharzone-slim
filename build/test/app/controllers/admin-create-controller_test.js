/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('AdminCreateCtrl', function () {
  var ctrl = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AdminCreateCtrl');
  }));

  it('should have ctrlName as AdminCreateCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AdminCreateCtrl');
  });
});