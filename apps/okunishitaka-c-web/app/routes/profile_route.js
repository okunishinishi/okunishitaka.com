/**
 * Routing for profile.
 * @module okunishitaka-c-web/app/routes/profileRoute
 */

"use strict";

var h = require('./_helper');

/**
 * One profile data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.one = function (req, res) {
    var data = require('../../public/json/profile.json');
    res.sendJson(data);
};











