/**
 * Test for app
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('AppError', function () {

    beforeEach(mock.module('ok.errors'));
    it('Create an error.', inject(function (AppError) {
        var error = new AppError(123, 'foo');
        expect(error).toBeDefined();
        expect(error.code).toEqual(123);
        expect(error.message).toEqual('foo');
    }));
});