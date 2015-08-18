(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:cart
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <cart></cart>
       </file>
     </example>
   *
   */
  angular
    .module('pharzone')
    .directive('cart', cart);

  function cart() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/cart/cart-directive.tpl.html',
      replace: false,
      controllerAs: 'cart',
      controller() {
        let vm = this;
        vm.name = 'cart';
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
