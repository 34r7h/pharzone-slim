/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('products', () => {
  let scope
    , element;

  beforeEach(module('pharzone', 'directives/products-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<products></products>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().products.name).toEqual('products');
  });
});
