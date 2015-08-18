(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:products
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <products></products>
       </file>
     </example>
   *
   */
  angular
    .module('pharzone')
    .directive('products', products);

  function products() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/products/products-directive.tpl.html',
      replace: false,
      controllerAs: 'products',
      controller() {
        let vm = this;
        vm.name = 'products';
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
