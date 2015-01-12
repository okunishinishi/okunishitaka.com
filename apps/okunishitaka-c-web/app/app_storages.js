/**
 * App storages.
 * @module karakuri-g-web/app/appStorages
 */


"use strict";

var u = require('apeman-util'),
    copy = u.object.copy,
    string = u.string,
    lib = require('../../okunishitaka-c-lib/lib'),
    models = lib.models,
    MysqlStorage = require('apeman-storage/lib/mysql_storage');

var NODE_ENV = process.env.NODE_ENV,
    isDevelopment = NODE_ENV === 'development',
    isTest = NODE_ENV === 'test';


/**
 * App storages.
 * @constructor AppStorages
 */
function AppStorages() {
    var s = this;
    s.init.apply(s, arguments);
}

AppStorages.prototype = {
    /**
     * Initialize the storage.
     */
    init: function (properties) {
        var s = this;
        copy(properties, s);
    },
    connect: function (config, callback) {
        var s = this,
            user = config.user;
        var connection = MysqlStorage
            .createConnection({
                //debug: true,
                database: config.schema,
                multipleStatements: false,
                port: config.port,
                host: config.host,
                user: user.username,
                password: user.password
            });
        Object.keys(s).forEach(function (key) {
            s[key].connect(connection);
        });

        s._connection = connection;
        connection.connect(callback);
    }
};


function newStorage(tableName, model) {
    return new MysqlStorage({
        tableName: tableName,
        model: model,
        console: isDevelopment
    });
}

module.exports = new AppStorages({
    blogStorage: newStorage('blog', models.blogModel),
    blogTagStorage: newStorage('blog_tag', models.blogTagModel),
    sessionStorage: newStorage('session', models.sessionModel)
});
