/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('shop', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzone', 'directives/shop-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<shop></shop>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().shop.name).toEqual('shop');
  });
});