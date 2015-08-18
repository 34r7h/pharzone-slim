'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:auth
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <auth></auth>
       </file>
     </example>
   *
   */
  angular.module('pharzone').directive('auth', auth);

  function auth() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/auth/auth-directive.tpl.html',
      replace: false,
      controllerAs: 'auth',
      controller: function controller() {
        var vm = this;
        vm.name = 'auth';
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../components/auth/auth-directive.js.map