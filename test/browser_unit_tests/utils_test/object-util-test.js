/**
 * Test for object utility.
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('objectutil', function () {

    beforeEach(mock.module('ok.utils'));

    it('Inject a util', inject(function (objectUtil) {
        expect(objectUtil).toBeDefined();
    }));

    it('Keys for value.', inject(function (objectUtil) {
        var keys = objectUtil.keysForValue({
            foo: 'bar',
            baz: 'quz',
            quzz: 'bar'
        }, 'bar');
        expect(keys[0]).toEqual('foo');
        expect(keys[1]).toEqual('quzz');
    }));

});