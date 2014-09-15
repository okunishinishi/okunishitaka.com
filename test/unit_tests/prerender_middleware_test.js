/**
 * @file Test for prerender_middleware.js.
 * Runs with node unit.
 */

"use strict";

var prerenderMiddleware = require('./../../app/middlewares/prerender_middleware.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Should show.'] = function (test) {
    var d = prerenderMiddleware._shouldShowPrerenderedPage._detectors;
    test.ok(d.isGet('GET'));
    test.ok(!d.isGet('POST'));
    test.ok(d.shouldIgnore('http://foo/bar/baz.xml'));
    test.ok(!d.shouldIgnore('http://foo/bar/baz.html'));
    test.ok(d.isBufferAgent({'x-bufferbot': 'true'}));
    test.ok(!d.isBufferAgent({}));
    test.ok(d.isCrawler({'user-agent': 'googlebot'}));
    test.ok(!d.isCrawler({'user-agent': '__'}));
    test.ok(d.isExcapedFragment({_escaped_fragment_: 'foo'}));
    test.ok(!d.isExcapedFragment({}));
    test.done();
};