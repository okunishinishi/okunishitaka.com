/**
 * Storages.
 */

"use strict";

var u = require('apeman-util'),
    async = u.ext.async,
    mkdirp = u.ext.mkdirp,
    path = u.core.path,
    storage = require('apeman-storage'),
    JsonStorage = storage.JsonStorage;


function AppStorages() {
    var s = this;
}

AppStorages.prototype = {
    rebuildAll: function (callback) {
        var s = this;
        JsonStorage.rebuildAll([
            s.blogStorage
        ], callback);
    },
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

AppStorages.newStorage = function (dataDir, dataSubDir, indicies) {
    var basedir = path.resolve(dataDir, dataSubDir);
    mkdirp.sync(basedir);
    return new JsonStorage({
        basedir: basedir,
        indicies: indicies
    });
}

module.exports = new AppStorages();