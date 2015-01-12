/**
 * Test for app
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('appConstant', function () {
    var appConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['appConstant', function (injected) {
            appConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(appConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(appConstant).forEach(function (key) {
            expect(appConstant[key]).toBeDefined();
        });
    });
});