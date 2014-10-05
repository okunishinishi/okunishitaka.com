/**
 * Test for work
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('workPage', function () {
    var scope;
    beforeEach(mock.module('ok.workPage'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('WorkCtrl', {$scope: scope});
    }));

    it('Create scope.', inject(function () {
        expect(scope).toBeDefined();
    }));
});