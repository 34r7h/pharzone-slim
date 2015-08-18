/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('cart', () => {
  let scope
    , element;

  beforeEach(module('pharzone', 'directives/cart-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<cart></cart>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().cart.name).toEqual('cart');
  });
});
