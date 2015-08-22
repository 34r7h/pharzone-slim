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
      controllerAs: 'list',
      controller: function controller($scope) {
        var vm = this;
        vm.name = 'list';
        vm.data = $scope.data;
        vm.models = Api.models;
        vm.objKey = function (obj) {
          var key = Object.keys(obj);
          return key[0];
        };
        vm.setState = Api.methods.setState;
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        var count = 0;
        var getData = function getData() {
          count++;
          setTimeout(function () {
            // console.log('getting data '+count, scope);
            !Api.data.object[attrs.list] ? getData() : (scope.data = Api.data.object[attrs.list], console.log('List data available', scope.data), scope.$apply());
          }, 250);
        };
        getData();

        scope.model = Api.models[attrs.list];
        //console.info('list scope.model',scope.model);
        // element.DataTable();
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../blocks/list/list-directive.js.map