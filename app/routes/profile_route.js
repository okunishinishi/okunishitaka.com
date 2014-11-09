/**
 * Route for profiles.
 * @module module:okunishitaka-dot-com/app/routes/profileRoute
 */

"use strict";


var h = require('./_helper');

var profile = require('../../public/json/profile.json');

exports.singleton = function (req, res, next) {
    res.sendJson(profile);
}