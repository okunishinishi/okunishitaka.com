/**
 * Blog data.
 * @module okunishitaka-c-lib/lib/models/blogModel
 * @property {object} properties - Model properties.
 */

"use strict";

exports.properties = {
    "blog_title": {
        "type": "string",
        "required": true
    },
    "blog_content": {
        "type": "string"
    }
};
exports.foreign = {};
exports.indices = [];
exports.unique = {};