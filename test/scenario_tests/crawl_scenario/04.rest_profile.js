/**
 * Scenario test for works.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;

describe('Profiles', function () {
    it('Get profile.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/api/profiles')
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            test.ok(body);
            var data = JSON.parse(body);
            test.ok(data);
            done();
        });
    });
});