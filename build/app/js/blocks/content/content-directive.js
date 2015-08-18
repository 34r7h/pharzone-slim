'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name pharzone.directive:content
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="pharzone">
       <file name="index.html">
        <content></content>
       </file>
     </example>
   *
   */
  angular.module('pharzone').directive('content', content);

  function content() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blocks/content/content-directive.tpl.html',
      replace: false,
      controllerAs: 'content',
      controller: function controller() {
        var vm = this;
        vm.name = 'content';
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../blocks/content/content-directive.js.map