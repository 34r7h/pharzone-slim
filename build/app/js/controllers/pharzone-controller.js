'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var PharzoneCtrl = function PharzoneCtrl(Api) {
    _classCallCheck(this, PharzoneCtrl);

    var vm = this;
    vm.ctrlName = 'PharzoneCtrl';
    vm.Api = Api;
  }

  /**
   * @ngdoc object
   * @name pharzone.controller:PharzoneCtrl
   *
   * @description
   *
   */
  ;

  angular.module('pharzone').controller('PharzoneCtrl', PharzoneCtrl);
})();
//# sourceMappingURL=../controllers/pharzone-controller.js.map