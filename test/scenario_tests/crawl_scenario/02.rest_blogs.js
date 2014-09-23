/**
 * Scenario test for blogs.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;


describe('Blogs', function () {
    var blog0 = null,
        blog1 = null;
    it('List blogs.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/blogs')
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
            url: scenario.url('/blogs'),
            form: {
                title: 'title-bar',
                name: 'blog0'
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.equal(data.status, 'success');

            blog0 = data.data;
            test.equal(blog0._vr, 0);

            request.post({
                url: scenario.url('/blogs'),
                form: {
                    title: 'title-bar',
                    name: 'blog1'
                }
            }, function (err, res, body) {
                blog1 = JSON.parse(body).data;
                done();
            });
        });
    });

    it('Update a blog', function (done) {
        var scenario = this;
        request.put({
            url: scenario.url('/blogs/' + blog0._id),
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
            url: scenario.url('/blogs/' + blog0._id),
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
            url: scenario.url('/blogs/' + blog0._id)
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var blog = JSON.parse(body);
            test.equal(blog._id, blog0._id);
            done();
        });
    });

    it('List blogs.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/blogs') + '?_limit=1&_sort=_at&_reverse=true',
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.ok(data.length == 1);
            test.equal(data[0].name, 'blog0');
            request.get({
                url: scenario.url('/blogs') + '?_skip=1&_sort=_at&_reverse=true',
            }, function (err, res, body) {
                test.ifError(err);
                test.equal(res.statusCode, 200);
                var data = JSON.parse(body);
                test.ok(data.length == 1);
                test.equal(data[0].name, 'blog1');
                done();
            });
        });
    });

    it('Destroy the blog.', function (done) {
        var scenario = this;
        request({
            method: 'delete',
            url: scenario.url('/blogs/' + blog0._id)
        }, function (err) {
            test.ifError(err);
            done();
        })
    });

    it('Find the blog', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/blogs/' + blog0._id)
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 404);
            done();
        });
    });


    it('Update a blog', function (done) {
        var scenario = this;
        request.put({
            url: scenario.url('/blogs/' + blog0._id),
            form: {
                content: 'bazbaz',
                _vr: 1
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 404);
            var data = JSON.parse(body);
            blog0 = data.data;
            done();
        });
    });
});
