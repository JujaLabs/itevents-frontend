'use strict';

describe('appLogin module', function() {

    var scope, loginCtrl;

    beforeEach(module('appLogin'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        loginCtrl = $controller('LoginController', {$scope: scope});
    }));

    describe('Controller', function(){

        it('should be defined loginController', function() {
            expect(loginCtrl).toBeDefined();
        });

        //Example Test
        //TODO
        it('UserName should be vasia', function() {
            expect(scope.userName).toBe('guest')
        })
    });
});