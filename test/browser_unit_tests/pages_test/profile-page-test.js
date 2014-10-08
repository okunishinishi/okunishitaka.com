/**
 * Test for profile
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('profilePage', function () {
    var scope;
    beforeEach(mock.module('ok.profilePage'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('ProfileCtrl', {$scope: scope});
    }));

    it('Create scope.', inject(function () {
        expect(scope).toBeDefined();
    }));
});