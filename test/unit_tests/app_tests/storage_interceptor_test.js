/**
 * @file Test for storage_interceptor.js.
 * Runs with node unit.
 */

"use strict";

var StorageInterceptor = require('./../../../app/routes/interceptors/storage_interceptor.js'),
    h = require('../../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Storage interceptor.'] = function (test) {
    var interceptor = new StorageInterceptor({});
    test.ok(interceptor);
    test.done();
};