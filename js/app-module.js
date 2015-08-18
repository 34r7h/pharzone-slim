'use strict';

(function () {
  'use strict';

  /* @ngdoc object
   * @name pharzone
   * @description
   *
   */
  angular.module('pharzone', ['ui.router', 'mm.foundation', 'firebase']).filter('orderObjectBy', function () {
    return function (items, field, reverse) {
      var filtered = [];
      angular.forEach(items, function (item) {
        filtered.push(item);
      });
      filtered.sort(function (a, b) {
        return a[field] > b[field] ? 1 : -1;
      });
      if (reverse) filtered.reverse();
      return filtered;
    };
  });
  ;
})();
//# sourceMappingURL=app-module.js.map