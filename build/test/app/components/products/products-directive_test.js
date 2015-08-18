/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('products', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzone', 'directives/products-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<products></products>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().products.name).toEqual('products');
  });
});