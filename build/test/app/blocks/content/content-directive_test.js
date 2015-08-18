/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('content', function () {
  var scope = undefined,
      element = undefined;

  beforeEach(module('pharzone', 'directives/content-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<content></content>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().content.name).toEqual('content');
  });
});