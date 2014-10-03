/**
 * @file Japanese locale data.
 */

"use strict";

var u = require('apeman-util'),
    copy = u.object.copy,
    en = require('./en');

var l = copy(en, {}); //use en as fallback.

l.meta = require('./_meta');


module.exports = Object.seal(l);