/**
 * Scenario test for blogs.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;

describe('Blog tag', function () {
    var blog01, blogTag01;
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

    it('Create a blog tag.', function (done) {
        var scenario = this;
        request.post({
            url: scenario.url('/admin/api/blog-tag'),
            form: {
                blog_id: blog01._id,
                tag_text: 'foo'
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.equal(data.status, 'success');
            blogTag01 = data.data;
            test.equal(blogTag01.tag_text, 'foo');
            done();
        });
    });

});
