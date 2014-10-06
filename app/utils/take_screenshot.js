/**
 * Take a screen shot.
 * @memberoku okunishitaka-dot-com/app/utils
 * @function takeScreenshot
 * @param {string} url - URL to screenthos.
 * @param {string} filename - Filename to save.
 * @param {object} options - Optional settings.
 * @param {number} options.width - Image width.
 * @param {number} options.height - Image hieght.
 * @param {function} callback - Callback when done.
 */

"use strict";

var u = require('apeman-util'),
    execPhantomScript = require('./exec_phantom_script');

/** @lends takeScreenshot */
function takeScreenshot(url, filename, options, callback) {
    var bin = require.resolve('./bin/screenshot.phantom.js');
    var width = (options.width || 600),
        height = (options.height || 600);
    execPhantomScript(bin, [
        url,
        filename,
        width,
        height,
    ], callback);
}

module.exports = takeScreenshot;