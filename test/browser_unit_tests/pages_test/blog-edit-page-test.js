/**
 * Test for blogEdit
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('blogEditPage', function () {
    var scope;
    beforeEach(mock.module('ok.blogEditPage'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('BlogEditCtrl', {$scope: scope});
    }));

    it('Create scope.', inject(function () {
        expect(scope).toBeDefined();
    }));
});