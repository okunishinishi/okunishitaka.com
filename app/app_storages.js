/**
 * Storages.
 */

"use strict";

var u = require('apeman-util'),
    async = u.ext.async,
    path = u.core.path,
    storage = require('apeman-storage'),
    JsonStorage = storage.JsonStorage;


function AppStorages() {
    var s = this;
}

AppStorages.prototype = {
    rebuildAll: function (callback) {
        var s = this;
        async.eachSeries([

        ], function (storage) {
            if (storage) {
                storage.rebuild(callback);
            } else {
                callback(null);
            }
        }, callback);
    },
    connect: function (dataDir, callback) {
        var s = this;
        s.settingsStorage = AppStorages.newStorage(dataDir, 'settings');
        s.rebuildAll(callback);
    }
}

AppStorages.newStorage = function (dataDir, dataSubDir) {
    return new JsonStorage(path.resolve(dataDir, dataSubDir));
}

module.exports = new AppStorages();