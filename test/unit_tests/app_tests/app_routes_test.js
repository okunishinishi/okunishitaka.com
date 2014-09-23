/**
 * @file Test for app_routes.js.
 * Runs with node unit.
 */

"use strict";

var appRoutes = require('./../../../app/app_routes.js'),
    h = require('../../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['App routes.'] = function (test) {
    Object.keys(appRoutes).forEach(function (path) {
        test.ok(path.match(/^\//));

        var routes = appRoutes[path];
        Object.keys(routes).forEach(function (method) {
            var methods = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'];
            test.ok(methods.indexOf(method) !== -1);
            var handler = routes[method];
            test.ok(handler);
        });
    });

    test.done();
};