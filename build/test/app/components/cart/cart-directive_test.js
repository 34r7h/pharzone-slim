/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('cart', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzone', 'directives/cart-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<cart></cart>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().cart.name).toEqual('cart');
  });
});