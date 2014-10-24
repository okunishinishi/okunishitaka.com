/**
 * Handler to rest.
 * @memberof module:okunishitaka-dot-com/app/routes/handlers/rest
 * @abstract
 * @constructor RestHandler
 */

"use strict";

var u = require('apeman-util'),
    copy = u.object.copy;

/** @lends RestHandler */
function RestHandler(config) {
    var s = this;
    s.init.apply(s, arguments);
}

RestHandler.prototype = {
    storage: null,
    schema: null,
    handle: null,
    init: function (config) {
        var s = this;
        copy(config || {}, s);
    }
};

/**
 * Define a rest handler.
 * @param {object} properties - Constructor properties.
 * @returns {function} - Defined constructor.
 */
RestHandler.define = function (properties) {
    function Defined(config) {
        var s = this;
        s.init.apply(s, arguments);
    }

    Defined.prototype = new RestHandler({});
    copy(properties || {}, Defined.prototype);

    return Defined;
};

module.exports = RestHandler;
