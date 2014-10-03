/**
 * @file Test for app.js.
 * Runs with node unit.
 */

"use strict";

var app = require('./../../app/app.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['App.'] = function (test) {
    test.ok(app);
    test.ok(app.start);
    test.done();
};

exports['New server.'] = function (test) {
    var server = app._newServer([
        function (req, res, next) {
            next();
        }
    ]);
    test.ok(server);
    test.done();
};

exports['Start app.'] = function (test) {
    h.injector.inject(app, '_clean', function (callback) {
        callback(null);
    });
    h.injector.inject(app, '_setupStorage', function (dataDir, callback) {
        callback(null);
    });
    h.injector.inject(app, '_newServer', function (middlewares) {
        return {
            use: h.doNothing,
            listen: function (port, callback) {
                callback(null);
            }
        }
    });
    app.start(null, {
        basedir: process.cwd(),
        publicDir: h.resolveWorkFile('work_app_public'),
        accessLogFile: h.resolveWorkFile('work_access_log.log'),
        errorLogFile: h.resolveWorkFile('work_error_log.log')
    }, function (app) {
        test.done();
    });
};