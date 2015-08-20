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
        console.log('attrs.chit', attrs.chit);
        function tryParseJSON (jsonString){
          try {
            var o = JSON.parse(jsonString);

            // Handle non-exception-throwing cases:
            // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
            // but... JSON.parse(null) returns 'null', and typeof null === "object",
            // so we must check for that, too.
            if (o && typeof o === "object" && o !== null) {
              return o;
            }
          }
          catch (e) { }

          return false;
        };
        tryParseJSON(attrs.chit) ? (scope.model = {}, scope.model.inputs = JSON.parse(attrs.chit)): scope.model = Api.models[attrs.chit];
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
