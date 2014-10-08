/**
 * Test for imageUrl
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('imageUrlConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (imageUrlConstant) {
        expect(imageUrlConstant).toBeDefined();
    }));
});