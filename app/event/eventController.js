(function(){
    'use strict';

    function eventController($scope, eventFactory){
        eventFactory.loadEvents().success(function() {
            $scope.events = eventFactory.getEvents();
        });
    }

    angular.module('appEvent')
        .controller('EventController',['$scope', 'EventFactory', eventController]);
})();