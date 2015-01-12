/**
 * Test for profile
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('ProfileEntity', function () {
    var ProfileEntity;
    beforeEach(function () {
        mock.module('ok.entities');
        inject(['ProfileEntity', function (injected) {
            ProfileEntity = injected;
        }]);
    });

    it('Inject the entity.', function () {
        expect(ProfileEntity).toBeDefined();
    });

    it('Create an instance.', function () {
        var entity = ProfileEntity.new({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    });

    it('Get default values', function(){
        var defaults = ProfileEntity.defaults();
        expect(defaults).toBeDefined();
    });
});