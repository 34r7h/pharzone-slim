/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('shop', () => {
  let scope
    , element;

  beforeEach(module('pharzone', 'directives/shop-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<shop></shop>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().shop.name).toEqual('shop');
  });
});
