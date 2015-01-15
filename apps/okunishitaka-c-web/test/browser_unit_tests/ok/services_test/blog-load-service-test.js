/**
 * Test for blogLoad
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('blogLoadService', function () {
    var blogLoadService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['blogLoadService', function (injected) {
            blogLoadService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(blogLoadService).toBeDefined();
    });
});