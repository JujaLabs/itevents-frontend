(function() {
    'use strict';

    function HomeController($scope, eventFactory){
        eventFactory.loadEvents().success(function() {
            $scope.events = eventFactory.getEvents();
        });
    }

    HomeController.$inject = ['$scope','eventFactory'];

    angular
        .module('appHome')
        .controller('HomeController', HomeController);
})();
