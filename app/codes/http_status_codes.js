/**
 * Http status codes.
 * @memberof module:okunishitaka-dot-com/app/codes
 * @member httpStatusCodes
 * @property {number} SUCCESS - Serve handle the request successfully.
 * @proprety {number} CONFLICT_ERROR - Resouce conflicted.
 * @property {number} VALIDATION_ERROR - Resouce validation failed.
 * @property {number} SERVER_ERROR - Internal server error occured.
 */

"use strict";

module.exports = Object.seal(
    {
        SUCCESS: 200,
        NOT_FOUND_ERROR: 404,
        CONFLICT_ERROR: 409,
        VALIDATION_ERROR: 422,
        SERVER_ERROR: 503
    }
);
