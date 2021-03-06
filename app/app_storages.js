/**
 * Storages for {@link http://okunishitaka.com|okunishitaka.com}.
 * This is a singleton instance of {@link module:okunishitaka-dot-com/app/AppStorages|AppStorages}
 * @see module:okunishitaka-dot-com/app/AppStorages
 * @module okunishitaka-dot-com/app/appStorages
 */

"use strict";

var u = require('apeman-util'),
    async = u.ext.async,
    mkdirp = u.ext.mkdirp,
    path = u.core.path,
    storage = require('apeman-storage'),
    JsonStorage = storage.JsonStorage;


/**
 * App storages.
 * @membeof module:okunishitaka-dot-com/app
 * @constructor AppStorages
 */
function AppStorages() {
    var s = this;
}

AppStorages.prototype = {
    /**
     * Rebuild all.
     * @param {function} callback - Callback when done.
     */
    rebuildAll: function (callback) {
        var s = this;
        JsonStorage.rebuildAll([
            s.blogStorage
        ], callback);
    },
    /**
     * Connect the storages.
     * @param {string} dataDir - Base data directory.
     * @param {function} callback - Callback when done.
     */
    connect: function (dataDir, callback) {
        var s = this;
        async.series([
            function (callback) {
                mkdirp(dataDir, callback);
            },
            function (callback) {
                s.settingStorage = AppStorages.newStorage(dataDir, 'settings');
                s.blogStorage = AppStorages.newStorage(dataDir, 'blogs', [
                    'title'
                ]);

                callback(null);
            },
            function (callback) {
                s.rebuildAll(callback);
            }

        ], callback);

    }
}

/**
 * Create a new storage.
 * @param {string} dataDir - Data root directory path.
 * @param {string} dataSubDir - Data suby directory path.
 * @param {string[]} indicies - Index keys.
 * @returns {JsonStorage}
 */
AppStorages.newStorage = function (dataDir, dataSubDir, indicies) {
    var basedir = path.resolve(dataDir, dataSubDir);
    mkdirp.sync(basedir);
    return new JsonStorage({
        basedir: basedir,
        indicies: indicies
    });
}

/** @lends appStorages */
module.exports = new AppStorages();