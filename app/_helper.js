/**
 * @file Convenience functions for app bin.
 * @private
 */

"use strict";

var u = require('apeman-util'),
    clustering = u.clustering,
    path = u.core.path;

var basedir = path.resolve(__dirname, '..'),
    h = new clustering.ClusterHelper(basedir);

h.async = u.ext.async;
h.path = path;

/**
 * Fork workers
 * @param {object} cluster - Node cluster
 * @param {number} numberOfWorkers - Number of workders to fork.
 * @param {function} callback - Callback when done.
 */
h.forkWorkers = function forkWorkers(cluster, numberOfWorkers, callback) {
    for (var i = 0; i < numberOfWorkers; i++) {
        cluster.fork();
    }
    var listeningCount = 0;
    var workers = [];
    cluster.on('listening', function (worker, address) {
        workers.push(worker);
        listeningCount++;
        var ready = listeningCount == numberOfWorkers;
        if (ready) {
            if (callback) {
                callback(workers);
            }
        }
    });
}

/**
 * Bind cluster worker
 * @param {object} cluster
 * @param {boolean} shouldRefork - Should re-fork or not.
 */
h.bindReforkWorker = function (cluster, shouldRefork) {
    cluster.on('disconnect', function (worker) {
        var refork = shouldRefork(worker);
        if (refork) {
            cluster.fork();
        }
    });
}

/**
 * Send data to all workers.
 * @param {object} cluster
 * @param {object} data - Data to send.
 */
h.sendToAllWorkers = function (cluster, data) {
    for (var id in cluster.workers) {
        if (cluster.workers.hasOwnProperty(id)) {
            var worker = cluster.workers[id];
            worker.send(data);
        }
    }
};

module.exports = h;