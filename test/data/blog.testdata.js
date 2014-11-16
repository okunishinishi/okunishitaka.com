/**
 * Test data for settings.
 */

"use strict";

var _newPudding = require('./_new_pudding'),
    p = _newPudding();


module.exports = p.explode({
    title: '${animal}は${star}の夢を見る',
    content: '${text.substr(100, 300)}',
    tagText: '${choice("日常","技術"),choice("ノウハウ","出来事")}'
}, 50);
