/**
 * @file Convenience functions for test.
 */

"use strict";

var u = require('apeman-util'),
    TestHelper = u.testing.TestHelper,
    request = u.ext.request,
    path = u.core.path;

var basedir = path.resolve(__dirname, '..');

var h = new TestHelper({
    mockDir: path.resolve(basedir, 'test/mocks'),
    workDir: path.resolve(basedir, 'test/.work')
});
h.basedir = basedir;
h.request = request;
h.cheerio = u.ext.cheerio;
h.test = u.core.assert;
h.path = u.core.path;
h.codes = require('../lib/codes');

h.newPudding = function () {
    var p = require('pudding'),
        Pudding = p.Pudding;

    // Define a new pudding object.
    return new Pudding({
        lang: 'ja'
    });
};

module.exports = h;





