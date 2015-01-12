/**
 * Test for blogTagApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('blogTagApiService', function () {
    var blogTagApiService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['blogTagApiService', function (injected) {
            blogTagApiService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(blogTagApiService).toBeDefined();
    });
});