(function() {
    'use strict';

    function LoginController($scope, $location){
        $scope.loggedIn = function(){
            $location.path('/home')
        };
    }

    LoginController.$inject = ['$scope','$location'];

    angular
      .module('appLogin')
      .controller('LoginController', LoginController);
})();
