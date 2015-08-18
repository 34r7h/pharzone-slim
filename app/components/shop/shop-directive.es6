(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:shop
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <shop></shop>
       </file>
     </example>
   *
   */
  angular
    .module('pharzone')
    .directive('shop', shop);

  function shop() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/shop/shop-directive.tpl.html',
      replace: false,
      controllerAs: 'shop',
      controller() {
        let vm = this;
        vm.name = 'shop';
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
