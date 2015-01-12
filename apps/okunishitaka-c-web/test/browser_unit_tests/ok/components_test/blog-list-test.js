/**
 * Test for blogList
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('BlogList', function () {
    var BlogList;
    beforeEach(function () {
        mock.module('ok.components');
        inject(['BlogList', function (injected) {
            BlogList = injected;
        }]);
    });

    it('Inject the component.', function () {
        expect(BlogList).toBeDefined();
    });

    it('Create an instance.', function () {
        var blogList = new BlogList({});
        expect(blogList).toBeDefined();
    });

});