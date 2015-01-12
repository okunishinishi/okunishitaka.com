/**
 * Schema definitions.
 * @memberof module:karakuri-g-lib/schemas
 * @member _def
 * @type object
 */

"use strict";

/** @lends _def **/
var _def = {};

/**
 * Type definition for array.
 * @memberof _def
 */
_def.ARRAY_TYPE = {
    type: 'array'
};
/**
 * Type definition for boolean.
 * @memberof _def
 */
_def.BOOLEAN_TYPE = {
    type: 'boolean'
};
/**
 * Type definition for integer.
 * @memberof _def
 */
_def.INTEGER_TYPE = {
    type: 'integer'
};
/**
 * Type definition for number.
 * @memberof _def
 */
_def.NUMBER_TYPE = {
    type: 'number'
};
/**
 * Type definition for null.
 * @memberof _def
 */
_def.NULL_TYPE = {
    type: 'null'
};
/**
 * Type definition for object.
 * @memberof _def
 */
_def.OBJECT_TYPE = {
    type: 'object'
};
/**
 * Type definition for string.
 * @memberof _def
 */
_def.STRING_TYPE = {
    type: 'string'
};
/**
 * Type definition for array array.
 * @memberof _def
 */
_def.ARRAY_TYPE_ARRAY = {
    type: 'array',
    items: {type: 'array'}
};
/**
 * Type definition for boolean array.
 * @memberof _def
 */
_def.BOOLEAN_TYPE_ARRAY = {
    type: 'array',
    items: {type: 'boolean'}
};
/**
 * Type definition for integer array.
 * @memberof _def
 */
_def.INTEGER_TYPE_ARRAY = {
    type: 'array',
    items: {type: 'integer'}
};
/**
 * Type definition for number array.
 * @memberof _def
 */
_def.NUMBER_TYPE_ARRAY = {
    type: 'array',
    items: {type: 'number'}
};
/**
 * Type definition for null array.
 * @memberof _def
 */
_def.NULL_TYPE_ARRAY = {
    type: 'array',
    items: {type: 'null'}
};
/**
 * Type definition for object array.
 * @memberof _def
 */
_def.OBJECT_TYPE_ARRAY = {
    type: 'array',
    items: {type: 'object'}
};
/**
 * Type definition for string array.
 * @memberof _def
 */
_def.STRING_TYPE_ARRAY = {
    type: 'array',
    items: {type: 'string'}
};
/**
 * Type definition for numeric string.
 * @memberof _def
 */
_def.NUMERIC_STRING = {
    type: 'string',
    pattern: '^[0-9]*$'
};
/**
 * Type definition for alpha string.
 * @memberof _def
 */
_def.ALPHA_STRING = {
    type: 'string',
    pattern: '^[a-zA-Z]*$'
};
/**
 * Type definition for account string.
 * @memberof _def
 */
_def.ACCOUNT_STRING = {
    type: 'string',
    pattern: '^[a-zA-Z0-9_\\-]+$'
};
/**
 * Type definition for password string.
 * @memberof _def
 */
_def.PASSWORD_STRING = {
    type: 'string',
    pattern: '^[a-zA-Z0-9_N\\-\\!\\*\\+]+$'
};
/**
 * Type definition for email string.
 * @memberof _def
 */
_def.EMAIL_STRING = {
    type: 'string',
    format: "email"
};
/**
 * Type definition for unique array.
 * @memberof _def
 */
_def.UNIQUE_ARRAY = {
    type: 'array',
    uniqueItems: true
};
/**
 * Type definition for notEmpty array.
 * @memberof _def
 */
_def.NOT_EMPTY_ARRAY = {
    type: 'array',
    minItems: 1
};

module.exports = Object.seal(_def);