"use strict";

var locales = require('../locales');

module.exports = (function (locales) {
    var result = [];
    Object.keys(locales).forEach(function (lang) {
        var locale = locales[lang],
            errors = locale.errors;
        result[lang] = errors && errors.validationError || {};
    });
    return result;
})(locales);