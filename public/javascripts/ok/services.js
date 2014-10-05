/**
 * ok services module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.services', [
            'ok.constants',
            'ok.entities',
            'ok.logics',
            'ok.utils'
        ]);
})(angular);

/**
 * Abstract api service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";


    /**
     * Abstract api service.
     * @param $http
     * @constructor
     */
    function ApiService($http, codeConstant, httpStatusCodeLogic) {
        var s = this;

        s._request = function (config, callback) {
            return $http(config)
                .success(function (data, status) {
                    callback(null, data);
                })
                .error(function (data, status) {

                    var statusName = s.httpStatusCodeLogic.nameForStatusCode(status),
                        error = ApiService.errorWithName(statusName);
                    callback();
                });
        };
        s.get = function (url, params, callback) {
            s._request({
                method: 'GET',
                params: params
            }, callback);
        }
    }

    ap.copy(
        {
            errorWithName: function (name) {
                var err = new Error(name);
                err.name = name;
                return err;
            }
        },
        ApiService
    )

    ng
        .module('ok.services')
        .service('apiService', ApiService);
})(angular, apeman);
/**
 * Blog api service.
 * @requires angular
 */
(function (ng) {
    "use strict";
    ng
        .module('ok.services')
        .service('blogApiService', function BlogApiService($http) {
            var s = this;
            s.list = function list(params) {
                return $http({
                    method: 'GET',
                    url: '/blogs/',
                    params: params
                });
            }
        });
})(angular);
/**
 * Setting api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('settingApiService', function SettingApiService ($http) {
            var s = this;
        });

})(angular);
