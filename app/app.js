'use strict';

angular.module('app', [
    'ngRoute',
    'appLogin',
    'appHome'
]).config(function ($routeProvider, $httpProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        })
        .when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/home'
        });

    //$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.withCredentials = true;

});
