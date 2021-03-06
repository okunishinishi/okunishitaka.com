/**
 * Sceanrio test for settings.
 */

"use strict";

var h = require('../../_helper'),
    request = h.request,
    test = h.test;

describe('Settings', function () {
    var created = null;
    it('Update the setting.', function (done) {
        var scenario = this;
        request.put({
            url: scenario.url('/api/settings'),
            form: {
                foo: 'bar'
            }
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.equal(data.status, 'success');
            test.ok(data.data._id);
            test.equal(data.data.foo, 'bar');
            done();
        });
    });

    it('Get the setting.', function (done) {
        var scenario = this;
        request.get({
            url: scenario.url('/api/settings')
        }, function (err, res, body) {
            test.ifError(err);
            test.equal(res.statusCode, 200);
            var data = JSON.parse(body);
            test.equal(data.foo, 'bar');
            done();
        });
    });
});
