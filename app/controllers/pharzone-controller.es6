(function () {
  'use strict';

  class PharzoneCtrl {
    constructor(Api, $state, $rootScope) {
      $rootScope.debug = true;
      let vm = this;
      vm.ctrlName = 'PharzoneCtrl';
      vm.Api = Api;
      Api.state.params = $state.params;
      Api.state.state = $state.current;
      // Api.state.orders = Api.data.object.users[Api.auth.uid].orders;

      $rootScope.$on('$stateChangeStart' || '$viewContentLoading',
        function(event, toState, toParams, fromState, fromParams){
          Api.state.data = Api.state.user ?
            Api.data.object.users[Api.state.user.uid].secure :
          {};
          console.log('$stateChangeStart', toParams);
          Api.state.params = toParams;
          Api.state.state = toState;
          vm.params = Api.state.params;
          vm.state = Api.state.state;
        });
      console.info('PharzoneCtrl', vm);

    }
  }

  /**
   * @ngdoc object
   * @name pharzone.controller:PharzoneCtrl
   *
   * @description
   *
   */
  angular
    .module('pharzone')
    .controller('PharzoneCtrl', PharzoneCtrl);
}());
