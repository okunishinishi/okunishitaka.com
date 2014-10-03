/**
 * @file App schemas.
 * @module okunishitaka-dot-com/app/schemas
 */

"use strict";

var u = require('apeman-util'),
    JsonSchema = u.schemas.JsonSchema;

module.exports = {
    get settingSaveSchema() {
        return new JsonSchema(require('./setting_save.schema.json'));
    }
}
