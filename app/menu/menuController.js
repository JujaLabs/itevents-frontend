(function(){
    'use strict';

    var MenuController = function ($scope) {
        $scope.menu_title = "IT Events";
    };

    angular
        .module('appMenu')
        .controller('MenuController', MenuController);
})();