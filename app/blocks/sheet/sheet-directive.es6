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
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        console.log(attrs.sheet);
        scope.model = Api.models[attrs.sheet];
        console.log(scope.model, element);
        //element.DataTable();
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
