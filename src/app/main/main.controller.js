(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $state) {
      $scope.nextPage = function(){
        $state.go('check-in');
      };
  }

})();
