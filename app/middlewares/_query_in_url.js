/**
 * Get query included in an url string.
 * @function _queryInUrl
 * @param {string} url
 * @returns {object} - A query object.
 */

"use strict";


var u = require('apeman-util'),
    qs = u.ext.qs;


/** @lends _queryInUrl */
function _queryInUrl(url) {
    return qs.parse(url.split('?').pop());
};

module.exports = _queryInUrl;