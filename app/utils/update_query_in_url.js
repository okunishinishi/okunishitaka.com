/**
 * @function updateQueryInUrl
 * @param {string} urlString - URL string.
 * @param {object} queryData - Query to write.
 * @returns {string} - Rewrited string.
 */

"use strict";

var u = require('apeman-util'),
    copy = u.object.copy,
    qs = u.ext.qs;

function updateQueryInUrl(urlString, query) {
    var urlAndQuery = urlString.split('?');
    var orinalQuery = qs.parse(urlAndQuery[1] || '');
    var newQuery = copy(query, orinalQuery);
    return [urlAndQuery[0], qs.stringify(newQuery)].join('?');
}

module.exports = updateQueryInUrl;