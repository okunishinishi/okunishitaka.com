/**
 * Route for works.
 * @module module:okunishitaka-dot-com/app/routes/workRoute
 */

"use strict";


var h = require('./_helper');

var works = require('../../public/json/works.json');

exports.list = function (req, res, next) {
    res.sendJson(works);
}