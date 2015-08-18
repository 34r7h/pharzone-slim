/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('orders', () => {
  let scope
    , element;

  beforeEach(module('pharzone', 'directives/orders-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<orders></orders>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().orders.name).toEqual('orders');
  });
});
