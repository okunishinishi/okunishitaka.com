/**
 * Test for entity.js
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('Entity', function () {

    beforeEach(mock.module('ok.entities'));
    it('Create an entity', inject(function (Entity) {
        var entity = new Entity({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    }));
});