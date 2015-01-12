/**
 * Score for an answer.
 * @module okunishitaka-c-lib/lib/models/scoreModel
 * @property {object} properties - Model properties.
 */

"use strict";

exports.properties = {
    "answer_id": {
        "type": "number",
        "required": true
    },
    "user_id": {
        "type": "number"
    },
    "star_count": {
        "type": "number"
    }
};
exports.foreign = {
    "answer_id": {
        "table": "answer",
        "col": "_id"
    },
    "user_id": {
        "table": "user",
        "col": "_id"
    }
};
exports.indices = [
    "answer_id",
    "user_id"
];
exports.unique = {};