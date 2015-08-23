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
  angular
    .module('pharzone')
    .directive('sheet', sheet);

  function sheet(Api) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blocks/sheet/sheet-directive.tpl.html',
      replace: false,
      controllerAs: 'sheet',
      controller() {
        let vm = this;
        vm.name = 'sheet';
        vm.models = Api.models;
        vm.objKey = (obj) => {
          var key = Object.keys(obj);
          return key[0];
        };
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        var getData = ()=>{
          console.log(attrs.sheet);
          scope.name = attrs.sheet;
          scope.model = Api.models[scope.name];
          scope.data = Api.state[scope.name];
          console.log(scope.model, element);
        };
        getData();

        // element.DataTable();
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
