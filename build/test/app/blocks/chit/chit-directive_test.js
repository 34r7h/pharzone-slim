/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('chit', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzone', 'directives/chit-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<chit></chit>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().chit.name).toEqual('chit');
  });
});