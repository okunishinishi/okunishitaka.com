"use strict";

/**
 * Setup functions.
 */

"use strict";

var config = require('./scenario_tests.config.json');
process.env.NODE_ENV = config.NODE_ENV;

var h = require('../_helper'),
    u = require('apeman-util'),
    url = u.core.url,
    format = u.core.util.format,
    app = require('../../app/app');

var port = config.port;

function _startScenarioTestServer(callback) {
    h.prepareCleanWorkDir(h.resolveWorkFile('work_scenario_data'));
    app.start(port, {
        basedir: h.basedir,
        publicDir: 'public',
        dataDir: h.resolveWorkFile('work_scenario_data'),
        cacheDir: h.resolveWorkFile('work_scenario_data/cache'),
        prerenderCacheDir: h.resolveWorkFile('work_scenario_data/cache/prerender'),
        accessLogFile: h.resolveWorkFile('work_scenario_access.log'),
        errorLogFile: h.resolveWorkFile('work_scenario_error.log'),
    }, function (server) {
        callback(server);
    });
}

var baseURL = format('http://localhost:%s/', port);
_startScenarioTestServer.resolve = function (pathname) {
    return url.resolve(baseURL, pathname);
};

module.exports = _startScenarioTestServer;