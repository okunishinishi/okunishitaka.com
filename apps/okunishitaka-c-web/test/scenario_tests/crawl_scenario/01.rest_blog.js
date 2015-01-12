/**
 * Scenario test for blogs.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;

describe('Blog', function () {
    var blog01;
    it('Create blog.', function (done) {
        var scenario = this;
        var now = new Date();
        request.post({
            url: scenario.url('/admin/api/blog'),
            form: {
                blog_title: 'scenario-' + now.getTime()
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.equal(data.status, 'success');
            blog01 = data.data;
            done();
        });
    });

    it('Get one.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/admin/api/blog/') + blog01._id
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.ok(data);
            done();
        });
    });

    it('Update blog.', function (done) {
        var scenario = this;
        var now = new Date();
        var blog_title = 'scenario-updated' + now.getTime();
        request.put({
            url: scenario.url('/admin/api/blog/') + blog01._id,
            form: {
                blog_title: blog_title,
                _vr: 0
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.equal(data.data.blog_title, blog_title);
            done();
        });
    });

    it('List blog.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/admin/api/blog')
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.ok(data);
            done();
        });
    });

    it('Destroy blog.', function (done) {
        var scenario = this;
        request({
            method: 'DELETE',
            url: scenario.url('/admin/api/blog/') + blog01._id
        }, function (err, res, body) {
            test.ifError(err);
            var data = JSON.parse(body);
            test.equal(data.status, 'success');
            done();
        });
    });

});
