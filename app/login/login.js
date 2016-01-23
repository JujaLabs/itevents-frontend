(function() {
    'use strict';
    angular.module('appLogin', ['ngCookies']).config(['$httpProvider', function($httpProvider) {
        	  $httpProvider.defaults.withCredentials = true;
    }]);
})();
