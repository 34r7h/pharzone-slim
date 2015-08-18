/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('list', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzone', 'directives/list-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<list></list>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().list.name).toEqual('list');
  });
});