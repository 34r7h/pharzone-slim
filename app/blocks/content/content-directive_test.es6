/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('content', () => {
  let scope
    , element;

  beforeEach(module('pharzone', 'directives/content-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<content></content>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().content.name).toEqual('content');
  });
});
