(function () {
  'use strict';

  class PharzoneCtrl {
    constructor(Api, $state, $rootScope) {
      let vm = this;
      vm.ctrlName = 'PharzoneCtrl';
      vm.Api = Api;
      /*var dummyItems = [
        {id: '0', user:'morgan', name:'cocaine', trueName: 'methyl (1R,2R,3S,5S)-3- (benzoyloxy)-8-methyl-8-azabicyclo[3.2.1] octane-2-carboxylate',price: 34, details:'peppy stuff', form:'powder', images:['http://i.huffpost.com/gen/1658836/images/o-COCAINE-facebook.jpg']},
        {id: '1', user:'irth', name:'ayahuasca', trueName: 'yagé', price: 324, details:'ego stuff', form:'tea', images:['http://headoverheels.org.uk/wp-content/gallery/ayahuasca-visions/ayahuasca-visions_002.jpg']},
        {id: '2', user:'jaafar', name:'Mushrooms', trueName: 'psilocybe cubensis', price: 98, details:'headcheese stuff', form:'dried', images:['http://innervisions.nl/wp-content/themes/BLANK-Theme/images/big/growbox-psilocybe-cubensis-B-plus-innervisions.jpg']},
        {id: '3', user:'alex', name:'dmt', trueName: 'N,N-Dimethyltryptamine', price: 23, details:'soul stuff', form:'crystaline', images:['http://i348.photobucket.com/albums/q329/Phlux-/SDC14398_978x768.jpg']},
        {id: '4', user:'supertrooper', name:'peyote', trueName: 'Lophophora williamsii', price: 9, details:'native stuff', form:'buttons', images:['http://www.magicactus.com/images/Lophophora%20Williamsii%20var.%20Nuevo%20Yucatan%20in%20flower.JPG']}
      ];
      setTimeout(()=>{
        vm.Api.methods.save('shop', dummyItems);

      },4000);*/
      //console.info('$state', $state);
      Api.state.params = $state.params;
      $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
          console.log('$stateChangeStart', toParams);
          Api.state.params = toParams;
          vm.params = Api.state.params;
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
