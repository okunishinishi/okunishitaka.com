/**
 * Test for blog
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('blogPage', function () {
    var scope;
    beforeEach(mock.module('ok.blogPage'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('BlogCtrl', {$scope: scope});
    }));

    it('Create scope.', inject(function () {
        expect(scope).toBeDefined();
    }));
});