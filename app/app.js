'use strict';

// Declare app level module which depends on views, and components
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
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
