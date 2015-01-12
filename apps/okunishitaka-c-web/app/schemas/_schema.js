"use strict";

var u = require('apeman-util'),
    JsonSchema = u.schemas.JsonSchema,
    messages = require('./_messages');

function Schema() {
    var s = this;
    s.init.apply(s, arguments);
    Object.keys(messages).forEach(function (lang) {
        s.addLangData(lang, messages[lang]);
    });
}
Schema.prototype = new JsonSchema({});
module.exports = Schema;