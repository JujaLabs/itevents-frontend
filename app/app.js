'use strict';

angular.module('itEventsApp', [
    'ngRoute',
    'ngResource'
]).config(function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});

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
