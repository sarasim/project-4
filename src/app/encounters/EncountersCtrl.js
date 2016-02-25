(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl) ;
    // .service('Encounters', EncountersService);

  /** @ngInject */
  function EncountersCtrl($scope, $http) {
    var ENCOUNTERS_GET_URL =
    'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $http ({
      method: 'GET',
      url: ENCOUNTERS_GET_URL
    }).then(function(response){
      console.log(response);
        $scope.encounters = response.data.encounters;
    }, function(error){
      console.log(error);
       //TODO: Handle error
    });
   }



})();
