(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl) ;
    // .service('Encounters', EncountersService);

  /** @ngInject */
  function EncountersCtrl($scope, $http, $state) {
    var ENCOUNTERS_GET_URL =
    'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.reportPage = function reportPage(){
       $state.go('report');
       };
    

    $http ({
      method: 'GET',
      url: ENCOUNTERS_GET_URL
    }).then(function(response){

        $scope.encounters = response.data.encounters;
    }, function(error){

    });
   }


})();
