/**
 * Http status codes
 * @memberof okunishitaka-c-lib/lib/codes
 * @member httpStatusCodes
 * @property {number} SUCCESS - Server handle the request successfully.
 * @property {number} NOT_FOUND_ERROR - Resource not found.
 * @property {number} CONFLICT_ERROR - Resource conflicted.
 * @property {number} NOT_AUTHORIZED_ERROR - Operation not allowed.
 * @property {number} VALIDATION_ERROR - Resource validation failed.
 * @property {number} SERVER_ERROR - Internal server error occurred.
 */

"use strict";

module.exports = require('apeman-web/lib/codes/http_status_codes');