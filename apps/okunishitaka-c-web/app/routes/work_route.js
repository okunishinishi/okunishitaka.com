/**
 * Routing for work.
 * @module okunishitaka-c-web/app/routes/workRoute
 */

"use strict";

var h = require('./_helper');


/**
 * List work data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.list = function (req, res, next) {
    var data = require('../../public/json/works.json');
    res.sendJson(data);
};









