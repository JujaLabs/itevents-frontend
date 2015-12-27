'use strict';

describe('appHome Module', function () {

    var scope, homeController;

    beforeEach(module('appHome'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        homeController = $controller('HomeController', {$scope: scope});
    }));

    describe('test Controller', function(){
       it('should be defined', function () {
            expect(homeController).toBeDefined();
       })
    });
});