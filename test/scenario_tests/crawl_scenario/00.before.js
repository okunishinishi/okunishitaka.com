/**
 * Setup functions.
 */

"use strict";

var config = require('../scenario_tests.config.json');
process.env.NODE_ENV = config.NODE_ENV;

var h = require('../../_helper'),
    u = require('apeman-util'),
    format = u.core.util.format,
    app = require('../../../app/app');

before(function (done) {
    var scenario = this,
        port = config.port;
    scenario.baseURL = format('http://localhost:%s/', port);
    app.start(port, {
        basedir: h.basedir,
        publicDir: 'public',
        dataDir: h.resolveWorkFile('work_scenario_data'),
        cacheDir: h.resolveWorkFile('work_scenario_data/cache'),
        prerenderCacheDir: h.resolveWorkFile('work_scenario_data/cache/prerender'),
        accessLogFile: h.resolveWorkFile('work_scenario_access.log'),
        errorLogFile: h.resolveWorkFile('work_scenario_error.log'),
    }, function (server) {
        scenario.server = server;
        done();
    });
});