/**
 * Test for blogApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('blogApiService', function () {
    var blogApiService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['blogApiService', function (injected) {
            blogApiService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(blogApiService).toBeDefined();
    });
});