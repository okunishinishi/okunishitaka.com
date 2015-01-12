/**
 * Test for adminBlogApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('adminBlogApiService', function () {
    var adminBlogApiService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['adminBlogApiService', function (injected) {
            adminBlogApiService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(adminBlogApiService).toBeDefined();
    });
});