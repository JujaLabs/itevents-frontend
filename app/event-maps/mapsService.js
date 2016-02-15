/**
 * Created by ramax on 2/15/16.
 */
(function(){
    'use strict';

    function mapsService() {
        var service  = {};

        service.getCenterByEvent = function(events) {
            var centerLon = 0;
            var centerLat = 0;
            var length = events.length;
            for (var i = 0; i < length; i++) {
                centerLat += events[i].location.latitude;
                centerLon += events[i].location.longitude;
            }

            centerLat /= length;
            centerLon /= length;
            return [centerLat, centerLon]
        };

        return service;
    }

    angular.module('appMaps').service("MapsService", mapsService)
})();