/**
 * Test for linkUrl
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('linkUrlConstant', function () {
    var linkUrlConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['linkUrlConstant', function (injected) {
            linkUrlConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(linkUrlConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(linkUrlConstant).forEach(function (key) {
            expect(linkUrlConstant[key]).toBeDefined();
        });
    });
});