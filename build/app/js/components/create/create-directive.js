'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:create
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <create></create>
       </file>
     </example>
   *
   */
  angular.module('pharzone').directive('create', create);

  function create() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/create/create-directive.tpl.html',
      replace: false,
      controllerAs: 'create',
      controller: function controller() {
        var vm = this;
        vm.name = 'create';
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../components/create/create-directive.js.map