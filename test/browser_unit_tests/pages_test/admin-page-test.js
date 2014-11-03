/**
 * Test for admin
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('adminPage', function () {
    var scope;
    beforeEach(mock.module('ok.adminPage'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('AdminCtrl', {$scope: scope});
    }));

    it('Create scope.', inject(function () {
        expect(scope).toBeDefined();
    }));
});