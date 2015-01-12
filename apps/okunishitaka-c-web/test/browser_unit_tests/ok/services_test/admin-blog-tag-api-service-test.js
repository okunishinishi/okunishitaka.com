/**
 * Test for adminBlogTagApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('adminBlogTagApiService', function () {
    var adminBlogTagApiService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['adminBlogTagApiService', function (injected) {
            adminBlogTagApiService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(adminBlogTagApiService).toBeDefined();
    });
});