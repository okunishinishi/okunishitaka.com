/**
 * Test for toastMessage
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('toastMessageService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (toastMessageService) {
        expect(toastMessageService).toBeDefined();
    }));

    it('Show messages.', inject(function (toastMessageService) {
        toastMessageService._showMessage('foo', 'info');
        toastMessageService.showInfoMessage('foo');
        toastMessageService.showWarnMessage('foo');
        toastMessageService.showErrorMessage('foo');
    }));
});