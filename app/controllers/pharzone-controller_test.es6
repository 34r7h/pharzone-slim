/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PharzoneCtrl', () => {
  let ctrl;

  beforeEach(module('pharzone'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('PharzoneCtrl');
  }));

  it('should have ctrlName as PharzoneCtrl', () => {
    expect(ctrl.ctrlName).toEqual('PharzoneCtrl');
  });
});
