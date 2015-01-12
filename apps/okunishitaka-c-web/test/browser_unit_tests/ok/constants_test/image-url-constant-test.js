/**
 * Test for imageUrl
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('imageUrlConstant', function () {
    var imageUrlConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['imageUrlConstant', function (injected) {
            imageUrlConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(imageUrlConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(imageUrlConstant).forEach(function (key) {
            expect(imageUrlConstant[key]).toBeDefined();
        });
    });
});