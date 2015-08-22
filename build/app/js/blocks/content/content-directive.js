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

  function content(Api) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blocks/content/content-directive.tpl.html',
      replace: false,
      controllerAs: 'content',
      controller: function controller() {
        var vm = this;
        vm.name = 'content';
        vm.models = Api.models;
        vm.objKey = function (obj) {
          var key = Object.keys(obj);
          return key[0];
        };
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        var count = 0;
        var getData = function getData() {
          count++;
          setTimeout(function () {
            scope.name = attrs.content;
            scope.model = Api.models[scope.name];
            //console.debug(Api.data.object, Api.state.params);
            //console.debug('Content '+scope.name, 'Keys'+Object.keys(Api.state.params));
            !Api.data.object[scope.name] ? getData() : (scope.data = Api.data.object[Object.keys(Api.state.params)][Api.state.params[scope.name]], console.log('Content data available', scope.data));
            scope.$apply();
          }, 250);
        };
        getData();

        // element.DataTable();
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../blocks/content/content-directive.js.map