(function() {
    'use strict';

    function EventFactory($resource, $http) {
        var events = [];
        var service = {};
        service.loadEvents = function(){
            var promise = $http.get('/data/events.json');
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
        .module('itEventsApp')
        .factory('eventFactory', EventFactory);
})();