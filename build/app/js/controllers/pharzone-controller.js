'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var PharzoneCtrl = function PharzoneCtrl(Api, $state, $rootScope) {
    _classCallCheck(this, PharzoneCtrl);

    $rootScope.debug = true;
    var vm = this;
    vm.ctrlName = 'PharzoneCtrl';
    vm.Api = Api;
    Api.state.params = $state.params;
    Api.state.state = $state.current;
    // Api.state.orders = Api.data.object.users[Api.auth.uid].orders;

    $rootScope.$on('$stateChangeStart' || '$viewContentLoading', function (event, toState, toParams, fromState, fromParams) {
      Api.state.data = Api.state.user ? Api.data.object.users[Api.state.user.uid].secure : {};
      console.log('$stateChangeStart', toParams);
      Api.state.params = toParams;
      Api.state.state = toState;
      vm.params = Api.state.params;
      vm.state = Api.state.state;
    });
    console.info('PharzoneCtrl', vm);
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