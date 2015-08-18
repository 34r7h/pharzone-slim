/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('sheet', () => {
  let scope
    , element;

  beforeEach(module('pharzone', 'directives/sheet-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<sheet></sheet>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().sheet.name).toEqual('sheet');
  });
});
