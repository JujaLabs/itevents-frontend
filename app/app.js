'use strict';

angular.module('app', [
    'ngRoute',
    'appLogin',
    'appHome',
    'appMaps'
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
        .when('/maps', {
            templateUrl: 'event-maps/maps.html',
            controller: 'MapsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
