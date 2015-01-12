/**
 * Tag for blog.
 * @module okunishitaka-c-lib/lib/models/blogTagModel
 * @property {object} properties - Model properties.
 */

"use strict";

exports.properties = {
    "blog_id": {
        "type": "number",
        "required": true
    },
    "tag_text": {
        "type": "string"
    }
};
exports.foreign = {
    "blog_id": {
        "table": "blog",
        "col": "_id"
    }
};
exports.indices = [
    "blog_id",
    "tag_text"
];
exports.unique = [];