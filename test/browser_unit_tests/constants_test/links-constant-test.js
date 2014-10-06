/**
 * Test for links
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('linksConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (linksConstant) {
        expect(linksConstant).toBeDefined();
    }));
});