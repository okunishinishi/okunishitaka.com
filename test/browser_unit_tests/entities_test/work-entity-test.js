/**
 * Test for work
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('WorkEntity', function () {

    beforeEach(mock.module('ok.entities'));
    it('Create an entity', inject(function (WorkEntity) {
        var entity = new WorkEntity({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    }));

});