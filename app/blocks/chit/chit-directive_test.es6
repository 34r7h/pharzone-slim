/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('chit', () => {
  let scope
    , element;

  beforeEach(module('pharzone', 'directives/chit-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<chit></chit>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().chit.name).toEqual('chit');
  });
});
