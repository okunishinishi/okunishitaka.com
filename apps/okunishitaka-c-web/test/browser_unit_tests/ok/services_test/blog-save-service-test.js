/**
 * Test for blogSave
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('blogSaveService', function () {
    var blogSaveService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['blogSaveService', function (injected) {
            blogSaveService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(blogSaveService).toBeDefined();
    });
});