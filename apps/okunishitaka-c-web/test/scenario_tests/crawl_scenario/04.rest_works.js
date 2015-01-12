/**
 * Scenario test for profile.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;

describe('Works.', function () {
    it('Get works.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/api/work')
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.ok(data);
            done();
        });
    });
});
