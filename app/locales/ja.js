/**
 * Japanese locale data.
 * @memberof module:okunishitaka-dot-com/app/locales
 * @member ja
 * @property {object} pageNames - Page names.
 * @property {object} button - Button texts.
 * @property {object} errors - Error title texts.
 * @property {object} errorDescriptions - Error detail texts.
 */

"use strict";

var u = require('apeman-util'),
    copy = u.object.copy,
    en = require('./en');

var l = copy(en, {}); //use en as fallback.


module.exports = Object.seal(l);