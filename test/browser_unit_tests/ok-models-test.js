/**
 * Test for ok-models.js
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('ok-models', function () {

    beforeEach(mock.module('okModels'));
    it('Create a model', inject(function (Model) {
        var model = new Model({});
        expect(model).toBeDefined();
    }));

    it('Create a blog.', inject(function (Blog) {
        var blog = new Blog({
            foo: 'bar'
        });
        expect(blog).toBeDefined();
        expect(blog.foo).toEqual('bar');
    }));
});