/**
 * Test for adminBlog
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('adminBlogPage', function () {
    var scope;
    beforeEach(mock.module('ok.adminBlogPage'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('AdminBlogCtrl', {$scope: scope});
    }));

    it('Create scope.', inject(function () {
        expect(scope).toBeDefined();
    }));
});