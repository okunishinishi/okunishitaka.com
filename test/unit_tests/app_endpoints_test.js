/**
 * @file Test for app_endpoints.js.
 * Runs with node unit.
 */

"use strict";

var appEndpoints = require('./../../app/app_endpoints.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['App endpoints.'] = function (test) {
    Object.keys(appEndpoints).forEach(function (path) {
        test.ok(path.match(/^\//));

        var routes = appEndpoints[path];
        Object.keys(routes).forEach(function (method) {
            var methods = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'];
            test.ok(methods.indexOf(method) !== -1);
            var handler = routes[method];
            test.ok(handler);
        });
    });
    test.done();
};