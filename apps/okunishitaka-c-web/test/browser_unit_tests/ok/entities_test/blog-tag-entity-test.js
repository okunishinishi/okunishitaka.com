/**
 * Test for blogTag
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('BlogTagEntity', function () {
    var BlogTagEntity;
    beforeEach(function () {
        mock.module('ok.entities');
        inject(['BlogTagEntity', function (injected) {
            BlogTagEntity = injected;
        }]);
    });

    it('Inject the entity.', function () {
        expect(BlogTagEntity).toBeDefined();
    });

    it('Create an instance.', function () {
        var entity = BlogTagEntity.new({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    });

    it('Get default values', function(){
        var defaults = BlogTagEntity.defaults();
        expect(defaults).toBeDefined();
    });
});