(function() {
    'use strict';

    function HomeController($scope, eventFactory){
        eventFactory.loadEvents().success(function() {
            $scope.events = eventFactory.getEvents();
        });
    }

    angular
        .module('appHome')
        .controller('HomeController', ['$scope','eventFactory',HomeController]);
})();
