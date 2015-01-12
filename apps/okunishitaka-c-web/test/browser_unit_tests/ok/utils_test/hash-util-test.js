/**
* Test for hash
* Runs with karma.
*/

"use strict";

var ng = angular,
mock = ng.mock;

describe('hashUtil', function () {
    var hashUtil;
    beforeEach(function () {
        mock.module('ok.utils');
        inject(['hashUtil', function (injected) {
            hashUtil= injected;
        }]);
    });

    it('Inject the util.', function () {
        expect(hashUtil).toBeDefined();
    });

});