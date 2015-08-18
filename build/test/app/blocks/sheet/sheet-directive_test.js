/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('sheet', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzone', 'directives/sheet-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<sheet></sheet>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().sheet.name).toEqual('sheet');
  });
});