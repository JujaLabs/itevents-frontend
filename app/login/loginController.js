(function() {
    'use strict';

    function LoginController($scope, LoginService){

        LoginService.tryAuthorize({
            success: function (user) {
                console.log('already authorized ', user);
            },
            error: function() {
                console.log('already authorized: false')
            }
        });

        $scope.loggedIn = function(){
            var login = encodeURI($scope.login);
            var password = encodeURI($scope.pass);
            LoginService.login(login, password, {
                success: function(user) {
                    console.log(user);
                },
                error: function() {
                    console.log('login error');
                }
            });
        };

        $scope.register = function() {
            var login = encodeURI($scope.login);
            var password = encodeURI($scope.pass);
            LoginService.register(login, password, {
                success: function() {
                    console.log('success register');
                },
                error: function() {
                    console.log('fail register');
                }
            });
        };

        $scope.logout = function() {
            LoginService.logout();
        }

    }

    angular
      .module('appLogin')
      .controller('LoginController', ['$scope','LoginService', LoginController]);
})();
