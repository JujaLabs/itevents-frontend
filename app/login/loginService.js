(function(){
    'use strict';

    function LoginService($cookieStore, $http) {

        function loadUserFromServer(callback) {
            $http.get(
                '/api/users/me'
            ).then( function successCallback(response) {
                callback.success(response.data);
            }, function errorCallback(response) {
                callback.error();
            });
        }

        function login(username, password, callback) {
            $http.post("/api/users/login?" +
                "username=" +  username +
                "&password=" + password
            ).then(function successCallback(response) {

                $cookieStore.put('token', response.data.token);
                $http.defaults.headers.common['Authorization'] = 'Bearer '+response.data.token;

                loadUserFromServer({
                    success: function (user) {
                        callback.success(user);
                    },
                    error: function() {
                        $cookieStore.remove('token');
                        $http.defaults.headers.common['Authorization'] = undefined;
                        callback.error();
                    }
                });

            }, function errorCallback(response) {
                callback.error();
            });
        }

        function register(username, password, callback) {
            $http.post("/api/users/register?" +
                "username=" +  username +
                "&password=" + password
            ).then(function successCallback(response) {
                callback.success();
                login(username, password, {
                    success: function(user) {
                        console.log('login after register success');
                    },
                    error: function() {
                        console.log('login after register error');
                    }
                });
            }, function errorCallback(response) {
                callback.error();
            });
        }

        this.tryAuthorize = function(callback) {
            var token = $cookieStore.get('token');
            if (token == undefined)
                callback.error();
            else {
                $http.defaults.headers.common['Authorization'] = 'Bearer '+ token;
                loadUserFromServer(callback);
            }
        };

        this.login = login;
        this.register = register;
        this.logout = function() {
            $cookieStore.remove('token')
            $http.defaults.headers.common['Authorization'] = undefined;
        };
    }

    angular.module('appLogin')
        .service('LoginService', ['$cookieStore', '$http', LoginService])
})();