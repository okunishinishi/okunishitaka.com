/**
 * Test data for user table.
 */

"use strict";

var h = require('../_helper');

module.exports = h.newPudding().explode({
    _id: "${i+1}",
    blog_id: "${parseInt(i/2)+1}",
    tag_text: "${animal}"
}, 300);
