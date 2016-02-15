(function(){
    'use strict';

    function MapsController(mapsService, eventFactory) {

        eventFactory.loadEvents().success(function() {

            var events = eventFactory.getEvents();
            var centerLocation = mapsService.getCenterByEvent(events);

            var map = L.map('mapEvent').setView(centerLocation, 10);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiemNjbWoiLCJhIjoiY2lrbmp6YmE4MDA4Y3ZtbTZ5aDIzY2c2NiJ9.nl0s3G7LGQ3X1sqyzW1BFw', {
                maxZoom: 18,
                attribution: 'Map data',
                id: 'mapbox.streets'
            }).addTo(map);

            for (var i = 0; i < events.length; i++) {
                var lat = events[i].location.latitude;
                var lon = events[i].location.longitude;
                L.marker([lat, lon]).addTo(map)
                    .bindPopup(events[i].title).openPopup();
            }

        });
    }

    angular.module('appMaps')
        .controller('MapsController',['MapsService', "EventFactory", MapsController])
})();