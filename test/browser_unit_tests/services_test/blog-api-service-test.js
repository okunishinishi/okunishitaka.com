/**
 * Test for blogApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('blogApiService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (blogApiService) {
        expect(blogApiService).toBeDefined();
    }));
});