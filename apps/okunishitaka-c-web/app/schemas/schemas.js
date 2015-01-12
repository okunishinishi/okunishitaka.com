/**
 * @file App schemas.
 * @module okunishitaka-c-web/app/schemas
 */

"use strict";

var Schema = require('./_schema');

module.exports = {
    get blogCreateSchema() {
        return new Schema(require('./blog_create.schema.js'));
    },
    get blogTagCreateSchema() {
        return new Schema(require('./blog_tag_create.schema.js'));
    },
    get blogUpdateSchema() {
        return new Schema(require('./blog_update.schema.js'));
    }
};
