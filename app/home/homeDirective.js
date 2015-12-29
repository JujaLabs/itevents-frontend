(function () {
    'use strict';

    angular.module('appHome')
        .directive('appMenu', function(){
            return {
                templateUrl: 'menu/menu.html',
                controller: 'MenuController'
            };
        });

    angular.module('appHome')
        .directive('appShell', function(){
            return {
                templateUrl: 'event/eventCard.html',
                controller: 'EventController'
            };
        });

})();