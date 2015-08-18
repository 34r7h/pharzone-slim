/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('create', () => {
  let scope
    , element;

  beforeEach(module('pharzone', 'directives/create-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<create></create>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().create.name).toEqual('create');
  });
});
