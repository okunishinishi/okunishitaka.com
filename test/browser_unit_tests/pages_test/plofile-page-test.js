/**
 * Test for plofile
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('plofilePage', function () {
    var scope;
    beforeEach(mock.module('ok.plofilePage'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('PlofileCtrl', {$scope: scope});
    }));

    it('Create scope.', inject(function () {
        expect(scope).toBeDefined();
    }));
});