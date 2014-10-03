/**
 * @file Codes.
 * @module okunishitaka-dot-com/app/codes
 */

"use strict";

module.exports = {
    get appErrorCodes() { return require('./app_error_codes'); },
    get httpStatusCodes() { return require('./http_status_codes'); }
};