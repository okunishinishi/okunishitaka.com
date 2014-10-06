/**
 * Setup functions.
 */

"use strict";

var h = require('../../_helper'),
    _startScenarioTestServer = require('../_start_scenario_test_server');

before(function (done) {
    var scenario = this;
    scenario.url = _startScenarioTestServer.resolve.bind(_startScenarioTestServer);

    _startScenarioTestServer(function (server) {
        scenario.server = server;
        done();
    });
});