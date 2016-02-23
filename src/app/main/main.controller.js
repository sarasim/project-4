(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
      $scope.description = 'Angular Seed Application';
  }

})();
