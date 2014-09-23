/**
 * Create a new pudding.
 */

"use strict";


var p = require('pudding'),
    Pudding = p.Pudding;

module.exports = function _newPudding() {
    return new Pudding({
        lang: 'ja'
    });
};

