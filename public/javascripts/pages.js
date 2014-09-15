/**
* Page script for blog.
* @requires angular
* @requires l
*/

(function (ng, l) {
    "use strict";

    ng
        .module('okBlogPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .controller('BlogCtrl', function($scope) {

        });

})(angular, l);
/**
* Page script for index.
* @requires angular
* @requires l
*/

(function (ng, l) {
    "use strict";

    ng
        .module('okIndexPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .controller('IndexCtrl', function($scope) {

        });

})(angular, l);
/**
 * okunishitaka.com abstract page script.
 * @requires angular
 * @requires l
 */

(function (ng, l) {
    "use strict";

    ng
        .module('okPage', [
            'okModels',
            'okServices'
        ])
        .run(function ($rootScope, $location, $anchorScroll, $window) {
            $rootScope.meta = {
                name: 'okunishitaka.com'
            };

            $rootScope.partials = {
                header: '/html/partials/header.html',
                footer: '/html/partials/footer.html'
            };

            $rootScope.goTop = function () {
                location.href = '/';
            };

            $rootScope.askSure = function () {
                return confirm('Are you sure?');//FIXME
            };

            $rootScope.l = l;

            $rootScope.scrollTo = function (id) {
                $location.hash(id);
                $anchorScroll();
            };

            $rootScope.baseURL = '.';
            $rootScope.url = function (url) {
                return [$rootScope.baseURL, url].join('/');
            }

        });
})(angular, l);

/**
* Page script for work.
* @requires angular
* @requires l
*/

(function (ng, l) {
    "use strict";

    ng
        .module('okWorkPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .controller('WorkCtrl', function($scope) {

        });

})(angular, l);
