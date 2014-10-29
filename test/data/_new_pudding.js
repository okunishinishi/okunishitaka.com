/**
 * Create a new pudding.
 */

"use strict";


var p = require('apeman-dev/lib/ext').pudding,
    Pudding = p.Pudding;

module.exports = function _newPudding() {
    return new Pudding({
        lang: 'ja'
    });
};

