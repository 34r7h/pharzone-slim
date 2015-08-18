'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:list
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <list></list>
       </file>
     </example>
   *
   */
  angular.module('pharzone').directive('list', list);

  function list() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blocks/content/content-directive.tpl.html',
      replace: false,
      controllerAs: 'list',
      controller: function controller() {
        var vm = this;
        vm.name = 'list';
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../blocks/list/list-directive.js.map