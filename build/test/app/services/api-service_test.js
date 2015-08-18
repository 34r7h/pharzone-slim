/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Api', function () {
  var service = undefined;

  beforeEach(module('pharzone'));

  beforeEach(inject(function (Api) {
    service = Api;
  }));

  it('should equal Api', function () {
    expect(service.get()).toEqual('Api');
  });
});