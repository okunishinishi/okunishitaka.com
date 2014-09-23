/**
 * Scenario test for blogs.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;

describe('Blogs', function () {
    var created = null;
    it('List blogs.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.baseURL + 'blogs'
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.ok(data);
            done();
        });
    });

    it('Create a blog.', function (done) {
        var scenario = this;
        request.post({
            url: scenario.baseURL + 'blogs',
            form: {
                title: 'title-bar'
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.equal(data.status, 'success');
            var blog = data.data;
            created = blog;
            test.equal(blog._vr, 0);
            done();
        });
    });

    it('Update a blog', function (done) {
        var scenario = this;
        request.put({
            url: scenario.baseURL + 'blogs/' + created._id,
            form: {
                content: 'bazbaz',
                _vr: 0
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.equal(data.status, 'success');
            done();
        });
    });

    it('Conflict on a blog', function (done) {
        var scenario = this;
        request.put({
            url: scenario.baseURL + 'blogs/' + created._id,
            form: {
                content: 'bazbaz',
                _vr: 0
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 409);
            done();
        });
    });

    it('Find the blog', function (done) {
        var scenario = this;
        request.get({
            url: scenario.baseURL + 'blogs/' + created._id
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var blog = JSON.parse(body);
            test.equal(blog._id, created._id);
            done();
        });
    })

    it('Destroy the blog.', function (done) {
        var scenario = this;
        request({
            method: 'delete',
            url: scenario.baseURL + 'blogs/' + created._id
        }, function (err) {
            test.ifError(err);
            done();
        })
    });

    it('Find the blog', function (done) {
        var scenario = this;
        request.get({
            url: scenario.baseURL + 'blogs/' + created._id
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 404);
            done();
        });
    })
});
