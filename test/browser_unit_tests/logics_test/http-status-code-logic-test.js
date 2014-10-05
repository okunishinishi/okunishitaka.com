/**
 * Test for httpStatusCode
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('httpStatusCodeLogic', function () {

    beforeEach(mock.module('ok.logics'));

    it('Inject the logic.', inject(function (httpStatusCodeLogic) {
        expect(httpStatusCodeLogic).toBeDefined();
    }));

    it('Get name.', inject(function (httpStatusCodeLogic) {
        expect(httpStatusCodeLogic.nameForStatusCode(404)).toEqual('NOT_FOUND_ERROR');
        expect(httpStatusCodeLogic.nameForStatusCode('404')).toEqual('NOT_FOUND_ERROR');
    }));

    it('Get status code', inject(function (httpStatusCodeLogic) {
        expect(httpStatusCodeLogic.statusCodeForName('NOT_FOUND_ERROR')).toEqual(404);
    }));

});