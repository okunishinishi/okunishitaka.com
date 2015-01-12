/**
 * Test for work
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('WorkEntity', function () {
    var WorkEntity;
    beforeEach(function () {
        mock.module('ok.entities');
        inject(['WorkEntity', function (injected) {
            WorkEntity = injected;
        }]);
    });

    it('Inject the entity.', function () {
        expect(WorkEntity).toBeDefined();
    });

    it('Create an instance.', function () {
        var entity = WorkEntity.new({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    });

    it('Get default values', function(){
        var defaults = WorkEntity.defaults();
        expect(defaults).toBeDefined();
    });
});