/**
 * Middleware to pre render.
 * @function prerenderMiddleware
 */

"use strict";

var u = require('apeman-util'),
    copy = u.object.copy,
    url = u.core.url,
    _shouldShowPrerenderedPage = require('./_should_show_prerendered_page'),
    phantomjs = require('phantomjs');

/** @lends prerenderMiddleware */
function prerenderMiddleware() {
    return function prerender(req, res, next) {
        var shouldShowPrerendered = prerenderMiddleware._shouldShowPrerendered;
        if (shouldShowPrerendered) {

        }
        next();
    }
}


prerenderMiddleware._shouldShowPrerenderedPage = _shouldShowPrerenderedPage;
module.exports = prerenderMiddleware;
