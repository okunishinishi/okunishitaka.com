/**
 * @file Convenience functions for test.
 */

"use strict";

var u = require('apeman-util'),
    TestHelper = u.testing.TestHelper,
    request = u.ext.request,
    path = require('path');

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

module.exports = h;





