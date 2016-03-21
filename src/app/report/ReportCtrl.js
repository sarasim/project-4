(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $cookies, $filter, $state)  {

    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

    var REPORTS_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

      $scope.aliens = {};
      $scope.showValidation = false;

      $scope.encounter = {
        colonist_id: $cookies.getObject('mars_user').id,
        date: $filter('date')(Date.now(), 'yyyy-MM-dd')
      };

      $http({
        method: 'GET',
        url: ALIENS_GET_URL

      }).then(function(response){
            $scope.aliens = response.data.aliens;

      }, function(error){
            // TODO: Handle error
      });

     $scope.submitReport = function(event){
       event.preventDefault();


       if($scope.reportForm.$invalid){
         $scope.showValidation = true;
       } else {

      $http({
        method: 'POST',
        url: REPORTS_POST_URL,
        data: {
          'encounter': $scope.encounter
        }
      }).then(function(response){
          // $cookies.putObject('mars_user', response.data.aliens);
          $state.go('encounters');

      });

     }

  };
}

})();
