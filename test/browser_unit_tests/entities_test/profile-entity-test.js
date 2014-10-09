/**
 * Test for profile
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('ProfileEntity', function () {

    beforeEach(mock.module('ok.entities'));
    it('Create an entity', inject(function (ProfileEntity) {
        var entity = new ProfileEntity({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    }));

});