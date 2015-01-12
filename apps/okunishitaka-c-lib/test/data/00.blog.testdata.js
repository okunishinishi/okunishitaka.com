/**
 * Test data for user table.
 */

"use strict";

var h = require('../_helper');

module.exports = h.newPudding().explode({
    _id: "${i+1}",
    blog_title: "${star}座に届いた話",
    blog_content: "${text.substr(200,100)}"
}, 150);
