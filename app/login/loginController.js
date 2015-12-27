(function() {
    'use strict';

    function LoginController($scope, $location){
        $scope.loggedIn = function(){
            $location.path('/home')
        };

        $scope.userName = "guest";
    }

    angular
      .module('appLogin')
      .controller('LoginController', ['$scope','$location', LoginController]);
})();
