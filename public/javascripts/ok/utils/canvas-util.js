/**
 * Canvas util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('canvasUtil', function defineCanvasUtil($window) {
            var canvasUtil = {
                get devicePixelRatio() {
                    return $window.devicePixelRatio || 1
                },
                /**
                 * Optimize canvas pixel rate.
                 * @param {HTMLElement} canvas
                 */
                optimizeCanvasRatio: function (canvas) {
                    var ratio = canvasUtil.devicePixelRatio;
                    if (!ratio) {
                        return;
                    }
                    var w = canvas.width,
                        h = canvas.height;
                    canvas.width = w * ratio;
                    canvas.height = h * ratio;
                    canvas.getContext('2d').scale(ratio, ratio);
                    canvas.style.width = w + 'px';
                    canvas.style.height = h + 'px';
                },
                /**
                 * Create a new canvas.
                 * @param {nubmer} width - Canvas width.
                 * @param {number} height - Canvas height.
                 * @returns {*}
                 */
                newCanvas: function (width, height) {
                    var canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    canvasUtil.optimizeCanvasRatio(canvas);
                    return canvas;
                }
            }
            return canvasUtil;
        });
})(angular, apeman);