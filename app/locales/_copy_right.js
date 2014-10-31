/**
 * Copy right data.
 */

"use strict";

var u = require('apeman-util'),
    format = u.core.util.format,
    pkg = require('../../package.json');


module.exports = format(
    'Copyright © %s %s',
    new Date().getFullYear(), pkg.author
);