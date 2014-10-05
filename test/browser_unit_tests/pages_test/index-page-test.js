/**
 * Test for index
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('indexPage', function () {
    var scope;
    beforeEach(mock.module('ok.indexPage'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('IndexCtrl', {$scope: scope});
    }));

    it('Create scope.', inject(function () {
        expect(scope).toBeDefined();
    }));
});