/**
 * Helper functions for route.
 */

"use strict";

var u = require('apeman-util'),
    string = u.string,
    async = u.ext.async,
    lib = require('../../../okunishitaka-c-lib/lib'),
    locales = require('../locales'),
    logics = lib.logics,
    appStorages = require('../app_storages');

var h = {};

h.handlers = lib.handlers;
h.storages = appStorages;
h.logics = logics;
h.async = async;

h.xFields = function (headers) {
    var xFields = {};
    Object.keys(headers || {}).forEach(function (key) {
        if (key.match(/^x\-/)) {
            var property = string.camelString(key.replace(/^x\-/, ''));
            xFields[property] = headers[key];
        }
    });
    return xFields;
};
h.safeJson = function (string) {
    if (typeof(string) === "object") {
        return string;
    }
    try {
        return JSON.parse(string);
    } catch (e) {
        return null;
    }

};

module.exports = h;
