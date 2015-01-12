/**
* Test for object
* Runs with karma.
*/

"use strict";

var ng = angular,
mock = ng.mock;

describe('objectUtil', function () {
    var objectUtil;
    beforeEach(function () {
        mock.module('ok.utils');
        inject(['objectUtil', function (injected) {
            objectUtil= injected;
        }]);
    });

    it('Inject the util.', function () {
        expect(objectUtil).toBeDefined();
    });

});