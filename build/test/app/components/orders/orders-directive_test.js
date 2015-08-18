/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('orders', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzone', 'directives/orders-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<orders></orders>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().orders.name).toEqual('orders');
  });
});