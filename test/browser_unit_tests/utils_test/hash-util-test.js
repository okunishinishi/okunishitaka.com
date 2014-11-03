/**
 * Test for hash utility.
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('hashutil', function () {

    beforeEach(mock.module('ok.utils'));

    it('Inject a util', inject(function (hashUtil) {
        expect(hashUtil).toBeDefined();
    }));

    it('Get hash.', inject(function (hashUtil) {
        var value = 'foo';
        expect(hashUtil.toHashCode(value)).toEqual(hashUtil.toHashCode(value));
    }));
});