/**
 * Test for canvas utility.
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('canvasutil', function () {

    beforeEach(mock.module('ok.utils'));

    it('Inject a util', inject(function (canvasUtil) {
        expect(canvasUtil).toBeDefined();
    }));

    it('Get device pixel ratio.', inject(function (canvasUtil) {
        expect(canvasUtil.devicePixelRatio).toBeDefined();
    }));

    it('Optimize canvas.', inject(function (canvasUtil) {
        expect(canvasUtil.optimizeCanvasRatio(document.createElement('canvas')));
    }));

    it('Create a new canvas.', inject(function (canvasUtil) {
        expect(canvasUtil.newCanvas(20, 20)).toBeDefined();
    }));
});