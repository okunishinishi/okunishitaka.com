/**
 *  App error codes.
 *  @memberof module:okunishitaka-dot-com/app/codes
 *  @member appErrorCodes
 *  @property {number} CONFLICT_ERROR - Conflict error.
 *  @property {number} CONNECTION_ERROR - Network connection error.
 *  @property {number} NOT_FOUND_ERROR - Not found error.
 *  @property {number} SERVER_ERROR - Internal server error.
 *  @property {number} UNEXPECTED_ERROR - Unexpected error.
 *  @property {number} VALIDATION_ERROR - Schema validation error.
 */

"use strict";


module.exports = Object.seal(
    {
        CONFLICT_ERROR: 1,
        CONNECTION_ERROR: 2,
        NOT_FOUND_ERROR: 3,
        SERVER_ERROR: 4,
        UNEXPECTED_ERROR: 5,
        VALIDATION_ERROR: 6
    }
);