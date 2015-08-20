'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:sheet
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
   <example module="pharzone">
   <file name="index.html">
   <sheet></sheet>
   </file>
   </example>
   *
   */
  angular.module('pharzone').directive('list', list);

  function list(Api) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blocks/list/list-directive.tpl.html',
      replace: false,
      controllerAs: 'lisst',
      controller: function controller() {
        var vm = this;
        vm.name = 'list';
        vm.models = Api.models;
        vm.objKey = function (obj) {
          var key = Object.keys(obj);
          return key[0];
        };
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        scope.model = Api.models[attrs.list];
        console.log('list scope.model', scope.model);
        // element.DataTable();
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../blocks/list/list-directive.js.map