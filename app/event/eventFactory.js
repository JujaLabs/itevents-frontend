(function() {
    'use strict';

    function EventFactory($resource, $http) {
        var events = [];
        var service = {};
        service.loadEvents = function(){
            var promise = $http.get('event/events.json');
            promise.success(function(data){
                events = data;
            });
            return promise;
        };
        service.getEvents = function(){
            return events;
        };
        return service;
    }

    EventFactory.$inject = ['$resource', '$http'];

    angular
        .module('appEvent')
        .factory('EventFactory', EventFactory);
})();