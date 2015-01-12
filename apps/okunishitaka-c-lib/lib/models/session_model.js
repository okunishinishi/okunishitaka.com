/**
 * Session data table.
 * @module okunishitaka-c-lib/lib/models/sessionModel
 * @property {object} properties - Model properties.
 */

"use strict";

exports.properties = {
    "session_id": {
        "type": "string",
        "required": true
    },
    "session_data": {
        "type": "TEXT",
        "required": false,
        "length": "65535"
    },
    "expire_date": {
        "type": "date",
        "default": "CURRENT_TIMESTAMP"
    }
};
exports.foreign = {};
exports.indices = [
    "session_id",
    "expire_date"
];
exports.unique = {};