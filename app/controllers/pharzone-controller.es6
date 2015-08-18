(function () {
  'use strict';

  class PharzoneCtrl {
    constructor(Api) {
      let vm = this;
      vm.ctrlName = 'PharzoneCtrl';
      vm.Api = Api;
    }
  }

  /**
   * @ngdoc object
   * @name pharzone.controller:PharzoneCtrl
   *
   * @description
   *
   */
  angular
    .module('pharzone')
    .controller('PharzoneCtrl', PharzoneCtrl);
}());
