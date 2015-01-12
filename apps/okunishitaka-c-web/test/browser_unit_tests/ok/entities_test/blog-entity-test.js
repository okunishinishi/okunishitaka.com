/**
 * Test for blog
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('BlogEntity', function () {
    var BlogEntity;
    beforeEach(function () {
        mock.module('ok.entities');
        inject(['BlogEntity', function (injected) {
            BlogEntity = injected;
        }]);
    });

    it('Inject the entity.', function () {
        expect(BlogEntity).toBeDefined();
    });

    it('Create an instance.', function () {
        var entity = BlogEntity.new({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    });

    it('Get default values', function(){
        var defaults = BlogEntity.defaults();
        expect(defaults).toBeDefined();
    });
});