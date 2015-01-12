/**
 * Test for errorHandle
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('errorHandleService', function () {
    var errorHandleService;
    beforeEach(function () {
        mock.module('ok.services');
        mock.module(function ($provide) {
            $provide.value('l', {});
        });
        inject(['errorHandleService', function (injected) {
            errorHandleService = injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(errorHandleService).toBeDefined();
    });
});