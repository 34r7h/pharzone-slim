(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:chit
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <chit></chit>
       </file>
     </example>
   *
   */
  angular
    .module('pharzone')
    .directive('chit', chit);

  function chit(Api) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blocks/chit/chit-directive.tpl.html',
      replace: false,
      controllerAs: 'chit',
      controller() {
        let vm = this;
        vm.name = 'chit';
        vm.models = Api.models;
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        console.log(attrs.chit);
        typeof attrs.chit !== 'string' ? (console.log('complex form'), scope.model = {},
          scope.model.inputs = JSON.parse(attrs.chit),
          console.log(scope.model)) : (scope.model = Api.models[attrs.chit], console.log(scope.model));
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
