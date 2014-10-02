/**
 * Test for blog
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('BlogEntity', function () {

    beforeEach(mock.module('ok.entities'));
    it('Create an entity', inject(function (BlogEntity) {
        var entity = new BlogEntity({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    }));

});