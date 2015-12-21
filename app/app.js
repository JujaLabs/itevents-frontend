'use strict';

angular.module('app', [
    'ngRoute',
    'appLogin',
    'appHome'
]).config(function ($routeProvider, $locationProvider) {

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
});
