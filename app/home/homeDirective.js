(function () {

    function MenuDirective() {
        return {
            templateUrl: 'menu/menu.html',
            controller: 'MenuController'
        };
    }

    MenuDirective().$inject = [];

    angular
        .module('appHome')
        .directive('appMenu', MenuDirective)
})();