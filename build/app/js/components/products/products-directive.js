'use strict';

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
  angular.module('pharzone').directive('products', products);

  function products() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/products/products-directive.tpl.html',
      replace: false,
      controllerAs: 'products',
      controller: function controller() {
        var vm = this;
        vm.name = 'products';
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../components/products/products-directive.js.map