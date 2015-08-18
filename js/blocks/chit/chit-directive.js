'use strict';

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
  angular.module('pharzone').directive('chit', chit);

  function chit(Api) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blocks/chit/chit-directive.tpl.html',
      replace: false,
      controllerAs: 'chit',
      controller: function controller() {
        var vm = this;
        vm.name = 'chit';
        vm.models = Api.models;
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        console.log(attrs.sheet);
        scope.model = Api.models[attrs.chit];
        console.log(scope.model);
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../blocks/chit/chit-directive.js.map