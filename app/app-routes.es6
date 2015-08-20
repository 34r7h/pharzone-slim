(function () {
  'use strict';

  angular
    .module('pharzone')
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('pharzone', {
        url: '/',
        template: '<ui-view></ui-view>',
        controller: 'PharzoneCtrl',
        controllerAs: 'pharzone'
      })
      .state('pharzone.shop', {
        url: 'shop',
        template: '<shop></shop><ui-view></ui-view>'
      })
      .state('pharzone.shop.cart', {
        url: '/cart',
        template: '<cart> </cart><ui-view></ui-view>'
      })
      .state('pharzone.shop.product', {
        url: '/:product',
        template: 'Single product View'
      })
      .state('pharzone.shop.cart.order', {
        url: '/:order',
        template: 'Order comes here'
      })
      .state('pharzone.admin', {
        url: 'admin',
        template: 'Let\'s Admin!<ui-view></ui-view>'
      })
      .state('pharzone.admin.products.create', {
        url: '/create',
        template: '<create></create>'
      })
      .state('pharzone.admin.products', {
        url: '/products',
        template: '<products></products><ui-view></ui-view>'
      })
      .state('pharzone.admin.products.product', {
        url: '/:product',
        template: 'Single Product Edit'
      })
      .state('pharzone.admin.orders', {
        url: '/orders',
        template: '<orders></orders><ui-view></ui-view>'
      })
      .state('pharzone.admin.orders.order', {
        url: '/:order',
        template: 'Single Order Goes Here'
      })
      .state('pharzone.auth', {
        url: 'auth',
        template: 'Let\'s Authenticate!<auth></auth><ui-view></ui-view>'
      })
      .state('pharzone.auth.login', {
        url: '/login',
        template: 'Login here <div chit="login"></div>'
      })
      .state('pharzone.auth.register', {
        url: '/register',
        template: 'Register Here <div chit="register"></div>'
      })
      .state('pharzone.auth.profile', {
        url: '/:user',
        template: 'Profile view <div chit="profile"></div>'
      });
    $urlRouterProvider.otherwise('/');
  }
}());
