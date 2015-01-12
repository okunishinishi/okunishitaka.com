/**
 * Scenario test for profile.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;

describe('Profile.', function () {
    it('Get profile.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/api/profile')
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.ok(data);
            done();
        });
    });
});
