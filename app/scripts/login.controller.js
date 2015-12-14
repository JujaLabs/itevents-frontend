(function() {
    'use strict';

    function LoginController($scope, $location){
        $location.path('/home')
    }

    LoginController.$inject = ['$scope','$location'];

    angular
      .module('itEventsApp')
      .controller('LoginController', LoginController);
})();
