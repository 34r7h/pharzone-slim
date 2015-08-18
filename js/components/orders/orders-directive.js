'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:orders
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <orders></orders>
       </file>
     </example>
   *
   */
  angular.module('pharzone').directive('orders', orders);

  function orders() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/orders/orders-directive.tpl.html',
      replace: false,
      controllerAs: 'orders',
      controller: function controller() {
        var vm = this;
        vm.name = 'orders';
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../components/orders/orders-directive.js.map