/**
 * Test for appApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('AppApiError', function () {

    beforeEach(mock.module('ok.errors'));
    it('Create an error.', inject(function (AppApiError) {
        var error = new AppApiError(123, 'foo');
        expect(error).toBeDefined();
        expect(error.code).toEqual(123);
        expect(error.message).toEqual('foo');
    }));
});