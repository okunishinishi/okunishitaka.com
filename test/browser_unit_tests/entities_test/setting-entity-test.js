/**
 * Test for setting
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('SettingEntity', function () {

    beforeEach(mock.module('ok.entities'));
    it('Create an entity', inject(function (SettingEntity) {
        var entity = new SettingEntity({
            foo: 'bar'
        });
        expect(entity).toBeDefined();
        expect(entity.foo).toEqual('bar');
    }));

});