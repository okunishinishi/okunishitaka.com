/**
 * Scenario test for blogs.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;

describe('Blog', function () {
    it('Prerender blog page.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/blog?_escaped_fragment_=')
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var $ = h.cheerio.load(body);
            test.ok($('title').text());
            test.ok($('meta[name="description"]').attr('content'));
            test.ok($('meta[name="author"]').attr('content'));
            done();
        });
    });
});
