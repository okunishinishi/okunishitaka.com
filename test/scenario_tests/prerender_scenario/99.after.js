/**
 * Tear down functions.
 */

"use strict";

after(function (done) {
    var scenario = this;

    scenario.server.close();
    done();
});