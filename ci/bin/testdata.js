#!/usr/bin/env node

"use strict";

var h = require('../_helper'),
    async = h.async,
    testdata = require('../../test/data'),
    settings = require('../../app/app_settings'),
    storages = require('../../app/app_storages');

process.chdir(settings.basedir);

h.yesno.ask('Are you sure to load test data ? [y/n]', null, function (ok) {
    if (!ok) {
        console.log('aborted.');
        return;
    }

    console.log('Destory all data...');
    h.rmdirRecursive(settings.dataDir, function () {
        storages.connect(settings.dataDir, function () {
            async.eachSeries(
                Object.keys(testdata),
                function (name, callback) {
                    console.log('Load data from ' + name + '...');
                    var storage = storages[name.replace(/Testdata$/, '') + 'Storage'];
                    if (!storage) {
                        console.error('Storage not found for name: ' + name);
                        calback(null);
                        return;
                    }
                    var data = [].concat(testdata[name]);
                    async.eachSeries(data, function (data, callback) {
                        storage.insert(data, callback);
                    }, function (err) {
                        console.log(data.length + ' data inserted.');
                        callback(err);
                    });
                },
                function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Load done!');
                    }
                    process.exit(err ? 0 : 1);
                }
            )
        });
    });
});